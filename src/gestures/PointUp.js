import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe victory gesture ✌️
const gestureDescription = new GestureDescription('point up');

// thumb:
// - not curled
// - vertical down (best) or diagonal up left / right
gestureDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
gestureDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 1.0);
gestureDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.25);
gestureDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.25);

// all other fingers:
// - curled
// - horizontal left or right
for (let finger of [Finger.Thumb, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  gestureDescription.addCurl(finger, FingerCurl.FullCurl, 2.0);
}

gestureDescription.setWeight(Finger.Index, 2);

export default gestureDescription;
