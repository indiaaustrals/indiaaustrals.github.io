/** Lets an email address wrap after the "@" on a narrow phone, instead of mid-word. */
export const softEmail = (s: string) => {
  const at = s.indexOf("@");
  if (at < 0) return s;
  return (
    <>
      {s.slice(0, at + 1)}
      <wbr />
      {s.slice(at + 1)}
    </>
  );
};
