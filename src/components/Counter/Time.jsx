const INCREASE = 1;
const DECREASE = -1;

const Time = ({ time, setTime, type }) => {
  const changeTime = (value) => {
    const newTime = time + value;

    if (type === 'hour') {
      if (newTime === -1) return;
      setTime((counter) => ({ ...counter, hour: newTime }));
    } else {
      setTime((counter) => ({
        ...counter,
        [type]: newTime === 60 ? 0 : newTime === -1 ? 59 : newTime,
      }));
    }
  };

  const formatTime = (currentTime) => {
    return currentTime < 10 ? `0${currentTime}` : currentTime.toString();
  };

  return (
    <div className='flex items-center gap-4 sm:flex-col'>
      <button
        onClick={() => changeTime(INCREASE)}
        className='counter__time-btn'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          version='1.0'
          viewBox='0 0 1280.000000 1130.000000'
          preserveAspectRatio='xMidYMid meet'
        >
          <g
            transform='translate(0.000000,1130.000000) scale(0.100000,-0.100000)'
            stroke='none'
          >
            <path d='M6266 11289 c-200 -27 -402 -141 -536 -301 -38 -46 -432 -718 -1284 -2194 -3554 -6153 -4323 -7485 -4358 -7554 -61 -121 -81 -211 -81 -375 -1 -115 3 -154 21 -220 91 -327 350 -567 681 -629 75 -14 614 -16 5691 -16 5077 0 5616 2 5691 16 331 62 590 302 681 629 18 66 22 105 21 220 0 164 -20 254 -81 375 -21 41 -756 1317 -1633 2835 -877 1518 -2126 3680 -2775 4804 -817 1416 -1196 2063 -1234 2109 -112 134 -277 239 -445 283 -93 24 -256 32 -359 18z' />
          </g>
        </svg>
      </button>
      <div className='bg-purple-600 w-32 h-32 rounded-lg flex flex-col gap-2 items-center justify-center shadow-lg text-white'>
        <div className='w-full flex justify-center items-center'>
          <span className='w-10 text-6xl font-bold text-center'>
            {formatTime(time)[0]}
          </span>
          <span className='w-10 text-6xl font-bold '>
            {formatTime(time)[1]}
          </span>
        </div>
        <span className='font-medium text-center text-sm'>
          {type[0].toUpperCase() + type.slice(1)}
        </span>
      </div>
      <button
        onClick={() => changeTime(DECREASE)}
        className='counter__time-btn rotate-180'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          version='1.0'
          viewBox='0 0 1280.000000 1130.000000'
          preserveAspectRatio='xMidYMid meet'
        >
          <g
            transform='translate(0.000000,1130.000000) scale(0.100000,-0.100000)'
            stroke='none'
          >
            <path d='M6266 11289 c-200 -27 -402 -141 -536 -301 -38 -46 -432 -718 -1284 -2194 -3554 -6153 -4323 -7485 -4358 -7554 -61 -121 -81 -211 -81 -375 -1 -115 3 -154 21 -220 91 -327 350 -567 681 -629 75 -14 614 -16 5691 -16 5077 0 5616 2 5691 16 331 62 590 302 681 629 18 66 22 105 21 220 0 164 -20 254 -81 375 -21 41 -756 1317 -1633 2835 -877 1518 -2126 3680 -2775 4804 -817 1416 -1196 2063 -1234 2109 -112 134 -277 239 -445 283 -93 24 -256 32 -359 18z' />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Time;
