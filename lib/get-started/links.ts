export const GET_STARTED_PATH = "/get-started";

export type ProductQueryValue = "launch" | "presence" | "not-sure";

/** Canonical commercial entry, with the only product-interest query this flow uses. */
export function getStartedHref(product: ProductQueryValue): string {
  return `${GET_STARTED_PATH}?product=${product}`;
}
