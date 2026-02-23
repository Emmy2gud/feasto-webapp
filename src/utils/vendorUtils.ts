// String formatting utilities for vendor listing page

export function formatMinOrder(amount: number): string {
  if (amount === 0) return 'No minimum';
  return `Min. Order $${amount}`;
}

export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

export function formatCategoryList(categories: string[]): string {
  return categories.join(' • ');
}

export function formatReviewCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k+ reviews`;
  }
  return `${count}+ reviews`;
}
