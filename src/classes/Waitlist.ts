export class Waitlist {
  email: string;

  constructor(email = "") {
    this.email = email;
  }

  public static async create(dto: Waitlist) {
    const response = await fetch(import.meta.env.PUBLIC_API + "waitlist.php", {
      method: "POST",
      body: JSON.stringify(dto),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data: { message: String } = await response.json();
    return data.message;
  }
}
