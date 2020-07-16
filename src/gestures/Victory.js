import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe victory gesture ✌️
const gestureDescription = new GestureDescription('victory');


// thumb:
gestureDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 0.5);
gestureDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);
gestureDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
gestureDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
gestureDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
gestureDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
gestureDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// middle:
gestureDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
gestureDescription.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
gestureDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpRight, 0.75);

// ring:
gestureDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
gestureDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.2);
gestureDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);
gestureDescription.addDirection(Finger.Ring, FingerDirection.HorizontalLeft, 0.2);

// pinky:
gestureDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
gestureDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.2);
gestureDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);
gestureDescription.addDirection(Finger.Pinky, FingerDirection.HorizontalLeft, 0.2);

// give additional weight to index and ring fingers
gestureDescription.setWeight(Finger.Index, 2);
gestureDescription.setWeight(Finger.Middle, 2);

export default gestureDescription;
