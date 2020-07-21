import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';

const gestureDescription = new GestureDescription('point right');

gestureDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
gestureDescription.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
gestureDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.5);
gestureDescription.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.5);

for (let finger of [Finger.Thumb, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  gestureDescription.addCurl(finger, FingerCurl.FullCurl, 1.0);
  gestureDescription.addDirection(finger, FingerDirection.HorizontalRight, 1.0);
  gestureDescription.addDirection(finger, FingerDirection.DiagonalUpRight, 1.0);
  gestureDescription.addDirection(finger, FingerDirection.DiagonalDownRight, 1.0);
}

gestureDescription.setWeight(Finger.Index, 2);

export default gestureDescription;
