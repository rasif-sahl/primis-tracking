interface RequestOptions extends RequestInit {
  headers?: Record<string, string>;
}

export async function fetchFromAPI<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  try {
    const response = await fetch(endpoint, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error ${response.status}: ${response.statusText || errorText}`);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data. Please try again later.");
  }
}
