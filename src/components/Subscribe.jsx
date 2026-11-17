export default function Subscribe() {
  const subscribe = () => {
    alert("感謝訂閱！");
  };

  return (
    <section id="subscribe" className="section">
      <h2>訂閱電子報</h2>
      <p>每個月寄給你一篇手沖小知識。</p>
      <div className="subscribe-form">
        <label htmlFor="email">Email：</label>
        <input type="email" id="email" placeholder="you@example.com" />
        <button type="button" onClick={subscribe}>
          訂閱
        </button>
      </div>
    </section>
  );
}
