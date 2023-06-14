export const getElementIds = (elements) => {
  if (!elements) return [];
  return elements?.map((id) => ({ id })) ?? [];
};
