app.js

function Bpp() {
  return <p>This is my second function</p>;
}

export {App};
export {Bpp};

index.js
import { App, Bpp } from './App';

const root1 = createRoot(document.getElementById('root1'));
root1.render(
  <React.StrictMode>
    <Bpp />
  </React.StrictMode>
);


    <div id="root1"></div>