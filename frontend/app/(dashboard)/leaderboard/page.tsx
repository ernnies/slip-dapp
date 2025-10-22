import { LeaderboardRow } from "@/components/ui/LeaderboardRow";

export default function Leaderboard() {
  const users = [{ id: "1", yield: "15%", address: "0x123" }];
  return (
    <div className="container mx-auto p-4">
      {users.map((user) => <LeaderboardRow key={user.id} {...user} />)}
    </div>
  );
}