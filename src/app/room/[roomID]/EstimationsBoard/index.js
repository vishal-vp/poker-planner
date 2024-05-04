export default function EstimationsBoard({ roomData }) {
  return Object.keys(roomData?.users).map((userID) => {
    const userEstimate = roomData?.estimates?.[userID] || "Not estimated yet";
    return (
      <div key={userID}>
        <span>
          {roomData?.users?.[userID]?.username}:{" "}
          {roomData?.isVisible ? userEstimate : "X"}
        </span>
      </div>
    );
  });
}
