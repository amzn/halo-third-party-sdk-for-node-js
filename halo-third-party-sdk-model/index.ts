/*
* Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file
* except in compliance with the License. A copy of the License is located at
*
* http://aws.amazon.com/apache2.0/
*
* or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for
* the specific language governing permissions and limitations under the License.
*/

/* tslint:disable */

/**
 * An object including a summary and a list of activities completed by the user on the given day.
 * @interface
 */
 export interface Activity {
  /**
   * An array of activity sessions completed by the user on the given day.
   */
  'sessions'?: Array<ActivitySession>;
}

/**
* An activity sessions completed by the user on the given day.
* @interface
*/
export interface ActivitySession {
  /**
   * A UUID identifying the activity session.
   */
  'id'?: string;
  /**
   * The type of activity that was completed.
   */
  'type'?: string;
  /**
   * The date and time the activity started, encoded in ISO8601 date/time format (yyyy-mm-ddThh:mm:ss.mmmZ).
   */
  'startDateTime'?: string;
  /**
   * The date and time the activity ended, encoded in ISO8601 date/time format (yyyy-mm-ddThh:mm:ss.mmmZ).
   */
  'endDateTime'?: string;
  /**
   * A boolean flag denoting if this session information was modified by the user.
   */
  'modified'?: boolean;
  /**
   * A boolean flag denoting if the session was automatically tracked (true) or manually entered.
   */
  'automatic'?: boolean;
  'stepInfo'?: StepInfo;
  'heartRate'?: HeartRate;
  /**
   * The timestamp for when the session and associated data (e.g. heart rate) was synced in extended ISO 8601 date/time format (yyyy-mm-ddThh:mm:ss.mmmZ).
   */
  'timestamp'?: string;
  'calorieInfo'?: CalorieInfo;
}

/**
* An object including a list of body fat percentage measurements taking on the given day.
* @interface
*/
export interface Body {
  'fatPercentage'?: FatPercentage;
}

/**
* An object including the calories burned by the user on the given day.
* @interface
*/
export interface CalorieInfo {
  'count'?: Count;
}

/**
* An Challenge completed by the user on the given day.
* @interface
*/
export interface Challenge {
  /**
   * A UUID identifying the Challenge.
   */
  'id'?: string;
  /**
   * A human-readable string describing the challenge the user completed.
   */
  'name'?: string;
  /**
   * An enumerated string describing what domain the challenge falls into. Values include 'ACTIVITY', 'SLEEP', 'MINDFULNESS', and 'NUTRITION'.
   */
  'type'?: string;
  /**
   * The date the user started the Challenge, encoded as YYYY-MM-DD.
   */
  'startDate'?: string;
  /**
   * The date the Challenge ended, encoded in YYYY-MM-DD.
   */
  'completionDate'?: string;
  /**
   * The timestamp for when the Challenge was synced in extended ISO 8601 date/time format (yyyy-mm-ddThh:mm:ss.mmmZ).
   */
  'timestamp'?: string;
}

/**
* Count object containing value and timestamp.
* @interface
*/
export interface Count {
  /**
   * Value for the count object.
   */
  'value'?: number;
  /**
   * Timestamp for the count object.
   */
  'timestamp'?: string;
}

/**
* An object containing the data payload of the message.
* @interface
*/
export interface Data {
  /**
   * An array of daily summaries (records).
   */
  'records'?: Array<Record>;
  'deauthorization'?: Deauthorization;
}

/**
* Deauthorization notification event.
* @interface
*/
export interface Deauthorization {
  /**
   * The identity of the customer that the record pertains to.
   */
  'sub'?: string;
  /**
   * The data and time the notification was sent, encoded in extended ISO 8601 date/time format (yyyy-mm-ddThh:mm:ss.mmmZ).
   */
  'timestamp'?: string;
}

/**
* An object containing the body fat percentage measurements.
* @interface
*/
export interface FatPercentage {
  'measurements'?: Array<Measurement>;
}

/**
* An object containing the average, maximum and resting heart rate during the given day.
* @interface
*/
export interface HeartRate {
  /**
   * Average heart rate across the activity, in beats per minute (contained within a \"heartRate\" object).
   */
  'average'?: number;
  /**
   * The maximum heart rate during the activity, in beats per minute (contained within a \"heartRate\" object).
   */
  'maximum'?: number;
  /**
   * Daily resting heart rate, in beats per minute (only contained within a \"heartRate\" object in the \"summary\").
   */
  'resting'?: number;
}

/**
* Body fat percentage measurements taken on the specified day, or the most recent measurement, if none were taken the specified day.
* @interface
*/
export interface Measurement {
  /**
   * The user daily, or most recent (if none take for given day), body fat percentage measurements.
   */
  'value'?: number;
  /**
   * The timestamp for when the data was recorded in extended ISO 8601 date/time format (yyyy-mm-ddThh:mm:ss.mmmZ).
   */
  'timestamp'?: string;
}

/**
* Daily summary.
* @interface
*/
export interface Record {
  /**
   * The customer-perceived day of the record as YYYY-MM-DD.
   */
  'date'?: string;
  /**
   * The identity of the customer that the record pertains to.
   */
  'sub'?: string;
  'stepInfo'?: StepInfo;
  'sleep'?: Sleep;
  'activity'?: Activity;
  /**
   * An array of Challenges completed by the user on the given day.
   */
  'challenges'?: Array<Challenge>;
  'body'?: Body;
}

/**
* Request wrapper for all events.
* @interface
*/
export interface RequestEnvelope {
  /**
   * The version specifier for the request.
   */
  'version': string;
  /**
   * The data and time the notification was sent, encoded in extended ISO 8601 date/time format (yyyy-mm-ddThh:mm:ss.mmmZ).
   */
  'timestamp': string;
  /**
   * The notification type, which can have values 'HEALTH_METRIC', 'HEALTH_METRIC_TEST', or 'DEAUTHORIZATION'.
   */
  'type': string;
  'data': Data;
}

/**
* An object including the sleep data for the user on the given day.
* @interface
*/
export interface Sleep {
  /**
   * The timestamp for when the data was synced in extended ISO 8601 date/time format (yyyy-mm-ddThh:mm:ss.mmmZ).
   */
  'timestamp'?: string;
  'score'?: SleepScore;
  'duration'?: SleepDuration;
  /**
   * Percentage of time in bed that a user is asleep.
   */
  'efficiency'?: number;
  /**
   * Time to fall asleep in seconds.
   */
  'onsetLatency'?: number;
  /**
   * The number of times awoken during sleep for 5 or more minutes.
   */
  'numberOfAwakenings'?: number;
  /**
   * A boolean flag denoting if this sleep session information was modified by the user.
   */
  'modified'?: boolean;
}

/**
* An object containing sleep duration data.
* @interface
*/
export interface SleepDuration {
  /**
   * Total time spent in various sleep stages over the course of the night in second.
   */
  'total'?: number;
  /**
   * Total time spent in bed over the course of the night in seconds.
   */
  'inBed'?: number;
  /**
   * Total time spent awake after falling asleep in seconds.
   */
  'awakeAfterSleep'?: number;
  /**
   * The total duration of time spent in light sleep in seconds.
   */
  'lightSleep'?: number;
  /**
   * The total duration of time spent in deep sleep in seconds.
   */
  'deepSleep'?: number;
  /**
   * The total duration of time spent in REM sleep in seconds.
   */
  'remSleep'?: number;
}

/**
* An object containing daily sleep score.
* @interface
*/
export interface SleepScore {
  /**
   * The daily sleep score.
   */
  'value'?: number;
  /**
   * The timestamp for when the data was synced in extended ISO 8601 date/time format (yyyy-mm-ddThh:mm:ss.mmmZ).
   */
  'timestamp'?: string;
  /**
   * A boolean flag denoting if the score is final (true) from the automatic detection algorithms perspective. Scores can still change if they are modified by the customer.
   */
  'isFinal'?: boolean;
}

/**
* An object including the daily steps taken by the user on the given day.
* @interface
*/
export interface StepInfo {
  'count'?: Count;
}
