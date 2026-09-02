import { useCursorFollower } from '../hooks/useCursorFollower';

const CursorFollower = () => {
  const { cursorRef, isMouseOver } = useCursorFollower();

  return (
    <div
      ref={cursorRef}
      className={`cursor-follow ${isMouseOver ? 'visible' : ''}`}
    ></div>
  );
};

export default CursorFollower;
