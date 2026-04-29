import { garments as initialGarments, type Garment, type Transfer } from "@/data/garments";

const STORAGE_KEY = "passiton_garments";

export function getStoredGarments(): Record<string, Garment> {
  if (typeof window === "undefined") return initialGarments;
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      return { ...initialGarments, ...parsed };
    } catch {
      return initialGarments;
    }
  }
  return initialGarments;
}

export function getStoredGarment(id: string): Garment | undefined {
  const garments = getStoredGarments();
  return garments[id];
}

export function addTransferToGarment(
  garmentId: string,
  transfer: Transfer
): Garment | undefined {
  if (typeof window === "undefined") return undefined;
  
  const garments = getStoredGarments();
  const garment = garments[garmentId];
  
  if (!garment) return undefined;

  const previousCurrent = garment.transfers.find(t => t.isCurrent);
  if (previousCurrent) {
    previousCurrent.isCurrent = false;
  }

  const updatedGarment: Garment = {
    ...garment,
    totalHolders: garment.totalHolders + 1,
    transfers: [...garment.transfers, { ...transfer, isCurrent: true }],
  };

  const updatedGarments = {
    ...garments,
    [garmentId]: updatedGarment,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedGarments));
  
  return updatedGarment;
}

export function updateTransfer(
  garmentId: string,
  transferIndex: number,
  updatedTransfer: Partial<Transfer>
): Garment | undefined {
  if (typeof window === "undefined") return undefined;
  
  const garments = getStoredGarments();
  const garment = garments[garmentId];
  
  if (!garment || !garment.transfers[transferIndex]) return undefined;

  const updatedGarment: Garment = {
    ...garment,
    transfers: garment.transfers.map((t, i) => 
      i === transferIndex ? { ...t, ...updatedTransfer } : t
    ),
  };

  const updatedGarments = {
    ...garments,
    [garmentId]: updatedGarment,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedGarments));
  
  return updatedGarment;
}

export function deleteTransfer(
  garmentId: string,
  transferIndex: number
): Garment | undefined {
  if (typeof window === "undefined") return undefined;
  
  const garments = getStoredGarments();
  const garment = garments[garmentId];
  
  if (!garment || !garment.transfers[transferIndex]) return undefined;

  const newTransfers = garment.transfers.filter((_, i) => i !== transferIndex);
  
  if (newTransfers.length > 0 && !newTransfers.some(t => t.isCurrent)) {
    newTransfers[newTransfers.length - 1].isCurrent = true;
  }

  const updatedGarment: Garment = {
    ...garment,
    totalHolders: Math.max(garment.totalHolders - 1, newTransfers.length),
    transfers: newTransfers,
  };

  const updatedGarments = {
    ...garments,
    [garmentId]: updatedGarment,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedGarments));
  
  return updatedGarment;
}

export function clearStoredGarments(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
