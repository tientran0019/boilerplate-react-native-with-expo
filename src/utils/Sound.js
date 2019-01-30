// /* --------------------------------------------------------
// * Author Trần Đức Tiến
// * Email ductienas@gmail.com
// * Phone 0972970075
// *
// * Created: 2019-01-06 16:35:46
// *------------------------------------------------------- */

// import Sound from 'react-native-sound';

// export const startSound = () => {
// 	const sound = new Sound(require('assets/audios/start.mp3'), (error) => {
// 		if (error) {
// 			console.log('Error', error);
// 			return;
// 		}
// 		sound.play(() => {
// 			sound.release();
// 		});
// 	});
// };

// export const incorrectSound = () => {
// 	const sound = new Sound(require('assets/audios/incorrect.mp3'), (error) => {
// 		if (error) {
// 			console.log('Error', error);
// 			return;
// 		}
// 		sound.play(() => {
// 			sound.release();
// 		});
// 	});
// };

// export const correctSound = () => {
// 	const sound = new Sound(require('assets/audios/correct.mp3'), (error) => {
// 		if (error) {
// 			console.log('Error', error);
// 			return;
// 		}
// 		sound.play(() => {
// 			sound.release();
// 		});
// 	});
// };

// export const summarySound = (cb = f => f) => {
// 	const sound = new Sound(require('assets/audios/summary.mp3'), (error) => {
// 		if (error) {
// 			console.log('Error', error);
// 			return cb();;
// 		}
// 		sound.play(() => {
// 			cb();
// 			sound.release();
// 		});
// 	});
// };

