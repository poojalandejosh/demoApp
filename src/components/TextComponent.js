import React from "react";

function TextComponent({
  color,
  fontSize,
  text,
  fontFamily,
  textAlign,
  fontWeight,
  fontStyle,
  textSizeAdjust,
}) {
  return (
    <p
      style={{
        color,
        fontSize,
        fontFamily,
        textAlign,
        fontWeight,
        fontStyle,
        textSizeAdjust,
      }}
    >
      {text}
    </p>
  );
}

export default TextComponent;
