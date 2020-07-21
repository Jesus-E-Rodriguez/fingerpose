import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';

const gestureDescription = new GestureDescription('fist');

for (let finger of [Finger.Thumb, Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  gestureDescription.addCurl(finger, FingerCurl.FullCurl, 2.0);
  gestureDescription.addCurl(finger, FingerCurl.HalfCurl, 0.5);
}

export default gestureDescription;
