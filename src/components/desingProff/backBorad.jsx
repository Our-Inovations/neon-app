export default function BackBoard({ backSelected, otherPara }) {
  return (
    <div className="my-10">
      <h3 className="proffh3">Backboard</h3>
      <div className="mt-6">
        <p className="font-bold">
          Backboard color: <span className="font-normal">{backSelected}</span>
        </p>
        <p className="font-bold">
          Shape: <span className="font-normal">{otherPara}</span>
        </p>
        <p className="font-bold">
          Cut Around Acrylic:
          <span className="font-normal">Ready to hang or wall mount.</span>
        </p>
      </div>
    </div>
  );
}
