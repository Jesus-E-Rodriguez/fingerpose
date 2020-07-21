import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe thumbs up gesture 👍
const gestureDescription = new GestureDescription('thumbs up');

// thumb:
// - not curled
// - vertical up (best) or diagonal up left / right
gestureDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
gestureDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
gestureDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.25);
gestureDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.25);

// all other fingers:
// - curled
// - horizontal left or right
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  gestureDescription.addCurl(finger, FingerCurl.FullCurl, 2.0);
}

gestureDescription.setWeight(Finger.Thumb, 2);

export default gestureDescription;
