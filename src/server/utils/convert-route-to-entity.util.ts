const mapping: Record<string, string> = {
  companies: 'company',
  'financial-advisors': 'financial_advisor',
  traders: 'trader',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
