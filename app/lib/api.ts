export async function checkAPIAuthStatus(): Promise<string> {
  try {
    const res = await fetch('/api/auth-status', {
      method: 'GET',
      credentials: 'include', // This is important for including cookies
    });
    if (!res.ok) {
      throw new Error('Failed to fetch auth status');
    }
    const data = await res.json();
    return data.message;
  } catch (error) {
    console.error('Error:', error);
    return 'Error checking auth status';
  }
}
