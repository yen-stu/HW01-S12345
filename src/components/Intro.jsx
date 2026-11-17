import coffee from "../assets/coffee.svg";

export default function Intro() {
  return (
    <section id="intro" className="section intro">
      <img src={coffee} alt="咖啡杯插圖" />
      <div>
        <h2>什麼是手沖咖啡？</h2>
        <p>手沖咖啡是用熱水慢慢沖過咖啡粉，讓咖啡一滴一滴流進杯子裡的方法。</p>
        <p>
          水的溫度、注水的速度、咖啡粉的粗細，都會影響咖啡的味道。
          <br />
          同樣的豆子，換一種沖法，喝起來就不一樣，這就是手沖好玩的地方。
        </p>
      </div>
    </section>
  );
}
