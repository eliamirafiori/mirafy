export async function getHealth() {
  const health = await fetch(
    `${process.env.NEXT_LOCALHOST_URL}/api/health`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    },
  );
  console.log("DEBUGGING JOBS API");
  console.log(health);

  return health;
}
