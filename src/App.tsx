import SupervisorIcon from './assets/icon-supervisor.svg';
import TeamIcon from './assets/icon-team-builder.svg';
import KarmaIcon from './assets/icon-karma.svg';
import CalculatorIcon from './assets/icon-calculator.svg';

function App() {
  return (
    <main className="flex h-screen flex-col items-center justify-center gap-16">
      <div className="flex max-w-2xl flex-col">
        <h1 className="text-center text-4xl font-extralight">
          Reliable, efficient delivery
        </h1>

        <h2 className="mt-2 text-center text-4xl font-semibold">
          Powered by Technology
        </h2>

        <p className="mt-4 text-center text-lg font-extralight leading-7 text-_grayish-blue">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>

      <div className="grid max-w-screen-xl grid-rows-4 gap-8">
        <div className="relative row-span-2 row-start-2 flex h-72 max-w-sm flex-col gap-2 rounded-lg bg-white p-8 shadow-xl">
          <div className="absolute inset-0 -z-10 -translate-y-2 rounded-lg bg-_cyan" />
          <h3 className="text-xl font-semibold">Supervisor</h3>
          <p className="font-extralight leading-7 text-_grayish-blue">
            Monitors activity to identify project roadblocks
          </p>
          <div>
            <img
              src={SupervisorIcon}
              alt="supervisor icon"
              className="absolute bottom-8 right-8"
            />
          </div>
        </div>

        <div className="relative col-start-2 row-span-2 row-start-1 flex h-72 max-w-sm flex-col gap-2 rounded-lg bg-white p-8 shadow-xl">
          <div className="absolute inset-0 -z-10 -translate-y-2 rounded-lg bg-_red" />
          <h3 className="text-xl font-semibold">Team Builder</h3>
          <p className="font-extralight leading-7 text-_grayish-blue">
            Scans our talent network to create the optimal team for your project
          </p>
          <div>
            <img
              src={TeamIcon}
              alt="team builder icon"
              className="absolute bottom-8 right-8"
            />
          </div>
        </div>

        <div className="relative row-span-2 row-start-3 flex h-72 max-w-sm flex-col gap-2 rounded-lg bg-white p-8 shadow-xl">
          <div className="absolute inset-0 -z-10 -translate-y-2 rounded-lg bg-_orange" />
          <h3 className="text-xl font-semibold">Karma</h3>
          <p className="font-extralight leading-7 text-_grayish-blue">
            Regularly evaluates our talent to ensure quality
          </p>
          <div>
            <img
              src={KarmaIcon}
              alt="karma icon"
              className="absolute bottom-8 right-8"
            />
          </div>
        </div>

        <div className="relative col-start-3 row-span-2 row-start-2 flex h-72 max-w-sm flex-col gap-2 rounded-lg bg-white p-8 shadow-xl">
          <div className="absolute inset-0 -z-10 -translate-y-2 rounded-lg bg-_blue" />
          <h3 className="text-xl font-semibold">Calculator</h3>
          <p className="font-extralight leading-7 text-_grayish-blue">
            Uses data from past projects to provide better delivery estimates
          </p>
          <div>
            <img
              src={CalculatorIcon}
              alt="calculator icon"
              className="absolute bottom-8 right-8"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

const Attribution = () => {
  return (
    <div>
      <p>
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </p>
    </div>
  );
};

export default App;
