export function convertToSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '') // Remove non-word characters
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-{2,}/g, '-') // Remove consecutive hyphens
      .replace(/['"]/g, ''); // Remove single and double quotes
  }