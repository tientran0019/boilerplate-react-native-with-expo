/* eslint-disable no-undef */
/* --------------------------------------------------------

* Author Tien Tran
* Email tientran@zellosoft.com
* Phone 0972970075
*
* Created: 2021-10-01 14:38:58
*------------------------------------------------------- */

import React from 'react';

const useCountDown = (timeToCount = 60 * 1000, interval = 1000) => {
	const [timeLeft, setTimeLeft] = React.useState(timeToCount);
	const timer = React.useRef({});

	const run = (ts) => {
		if (!timer.current.started) {
			timer.current.started = ts;
			timer.current.lastInterval = ts;
		}

		const localInterval = Math.min(interval, (timer.current.timeLeft || Infinity));
		if ((ts - timer.current.lastInterval) >= localInterval) {
			timer.current.lastInterval += localInterval;
			setTimeLeft((time) => {
				timer.current.timeLeft = time - localInterval;
				return timer.current.timeLeft;
			});
		}

		if (ts - timer.current.started < timer.current.timeToCount) {
			timer.current.requestId = window.requestAnimationFrame(run);
		} else {
			timer.current = {};
			setTimeLeft(0);
		}
	};

	const start = React.useCallback(
		(ttc) => {
			window.cancelAnimationFrame(timer.current.requestId);

			const newTimeToCount = ttc !== undefined ? ttc : timeToCount;
			timer.current.started = null;
			timer.current.lastInterval = null;
			timer.current.timeToCount = newTimeToCount;
			timer.current.requestId = window.requestAnimationFrame(run);

			setTimeLeft(newTimeToCount);
		},
		[],
	);

	const reset = React.useCallback(
		() => {
			window.cancelAnimationFrame(timer.current.requestId);

			timer.current.started = null;
			timer.current.lastInterval = null;
			timer.current.timeToCount = timeToCount;
			timer.current.requestId = window.requestAnimationFrame(run);

			setTimeLeft(timeToCount);
		},
		[],
	);

	const pause = React.useCallback(
		() => {
			window.cancelAnimationFrame(timer.current.requestId);
			timer.current.started = null;
			timer.current.lastInterval = null;
			timer.current.timeToCount = timer.current.timeLeft;
		},
		[],
	);

	const resume = React.useCallback(
		() => {
			if (!timer.current.started && timer.current.timeLeft > 0) {
				window.cancelAnimationFrame(timer.current.requestId);
				timer.current.requestId = window.requestAnimationFrame(run);
			}
		},
		[],
	);

	const stop = React.useCallback(
		() => {
			if (timer.current.timeLeft) {
				window.cancelAnimationFrame(timer.current.requestId);
				timer.current = {};
				setTimeLeft(0);
			}
		},
		[],
	);

	const actions = React.useMemo(() => ({ start, reset, pause, resume, stop }), []);

	React.useEffect(() => stop, []);

	return [timeLeft, actions];
};

export default useCountDown;
