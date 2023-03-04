type TimeFireBase = {
  seconds: number;
  nanoseconds: number;
};
export function convertDateFireBase(time: TimeFireBase) {
  if (!time) return;
  return JSON.stringify(
    new Date(time.seconds * 1000 + time.nanoseconds / 1000000),
  );
}
