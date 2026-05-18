import * as style from "./styles.js";

export default function Breadcrumb() {
  return (
    <div style={style.bread} aria-label="Breadcrumb" className="mt-20">
      <a href="/" style={style.a}>
        Home
      </a>
      &rsaquo;
      <span aria-current="page">Uranium Data</span> &rsaquo;
      <a href="/uranium-investing-101/" style={style.a}>
        Uranium 101
      </a>
    </div>
  );
}
