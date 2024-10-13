import React from "react";
import { useState } from "react";

function Panel({ title, isActive, onShow, children }) {
  return (
    <article className="message is-info">
      <div className="message-header" onClick={onShow}>
        <p>{title}</p>
      </div>
      {isActive && <div className="message-body">{children}</div>}
    </article>
  );
}

const Accordion = function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="box">
      <h2 className="title is-3">Almaty, Kazakhstan</h2>

      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>

      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </div>
  );
};

export default Accordion;
