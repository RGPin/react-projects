import { useRef, useState } from "react";
import useOutsideClick from ".";

export default function UseOnClickOutsideTest() {
  const ref = useRef();
  const [showContent, setShowContent] = useState(false);
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a random conent</h1>
          <p>Click outside to close this.</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show content</button>
      )}
    </div>
  );
}
