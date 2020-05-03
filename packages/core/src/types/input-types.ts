/*
Huge thanks to these people:
https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/fullcalendar/index.d.ts
*/

import { ViewApi } from '../ViewApi'
import { EventSourceInput } from '../structs/event-source-parse'
import { EventInputTransformer } from '../structs/event-parse'
import { Duration, DurationInput } from '../datelib/duration'
import { DateInput } from '../datelib/env'
import { FormatterInput } from '../datelib/formatting'
import { DateRangeInput } from '../datelib/date-range'
import { BusinessHoursInput } from '../structs/business-hours'
import { EventApi } from '../api/EventApi'
import { AllowFunc, ConstraintInput, OverlapFunc } from '../structs/constraint'
import { PluginDef } from '../plugin-system-struct'
import { LocaleSingularArg, RawLocale } from '../datelib/locale'


export interface ToolbarInput {
  left?: string
  center?: string
  right?: string
  start?: string
  end?: string
}

export interface CustomButtonInput {
  text: string
  icon?: string
  themeIcon?: string
  bootstrapFontAwesome?: string,
  click(element: HTMLElement): void
}

export interface ButtonIconsInput {
  prev?: string
  next?: string
  prevYear?: string
  nextYear?: string
}

export interface ButtonTextCompoundInput {
  prev?: string
  next?: string
  prevYear?: string
  nextYear?: string
  today?: string
  month?: string
  week?: string
  day?: string
  [viewId: string]: string | undefined // needed b/c of other optional types
}

export interface EventSegment {
  event: EventApi
  start: Date
  end: Date
  isStart: boolean
  isEnd: boolean
}

export interface CellInfo {
  date: Date
  allSegs: EventSegment[]
  hiddenSegs: EventSegment[]
}

export interface DropInfo {
  start: Date
  end: Date
}

export interface OptionsInputBase {
  headerToolbar?: boolean | ToolbarInput
  footerToolbar?: boolean | ToolbarInput
  customButtons?: { [name: string]: CustomButtonInput }
  buttonIcons?: boolean | ButtonIconsInput
  themeSystem?: 'standard' | string
  bootstrapFontAwesome?: boolean | ButtonIconsInput
  firstDay?: number
  direction?: 'ltr' | 'rtl' | 'auto'
  weekends?: boolean
  hiddenDays?: number[]
  fixedWeekCount?: boolean
  weekNumbers?: boolean
  weekNumberCalculation?: 'local' | 'ISO' | ((m: Date) => number)
  businessHours?: BusinessHoursInput
  showNonCurrentDates?: boolean
  height?: number | 'auto' | 'parent' | (() => number)
  contentHeight?: number | 'auto' | (() => number)
  aspectRatio?: number
  handleWindowResize?: boolean
  windowResizeDelay?: number
  dayMaxEvents?: boolean | number
  dayMaxEventRows?: boolean | number
  moreLinkClick?: 'popover' | 'week' | 'day' | 'timeGridWeek' | 'timeGridDay' | string |
  ((arg: { date: Date, allDay: boolean, allSegs: any[], hiddenSegs: any[], jsEvent: MouseEvent, view: ViewApi }) => void),
  timeZone?: string | boolean
  now?: DateInput | (() => DateInput)
  initialView?: string
  allDaySlot?: boolean
  allDayText?: string
  slotDuration?: DurationInput
  slotLabelFormat?: FormatterInput
  slotLabelInterval?: DurationInput
  snapDuration?: DurationInput
  scrollTime?: DurationInput
  slotMinTime?: DurationInput
  slotMaxTime?: DurationInput
  slotEventOverlap?: boolean
  listDayFormat?: FormatterInput | boolean
  listDaySideFormat?: FormatterInput | boolean
  initialDate?: DateInput
  nowIndicator?: boolean
  visibleRange?: ((currentDate: Date) => DateRangeInput) | DateRangeInput
  validRange?: DateRangeInput
  dateIncrement?: DurationInput
  dateAlignment?: string
  duration?: DurationInput
  dayCount?: number
  locales?: RawLocale[]
  locale?: LocaleSingularArg
  eventTimeFormat?: FormatterInput
  dayHeaders?: boolean
  dayHeaderFormat?: FormatterInput
  titleFormat?: FormatterInput
  weekText?: string
  displayEventTime?: boolean
  displayEventEnd?: boolean
  moreLinkText?: string | ((eventCnt: number) => string)
  dayPopoverFormat?: FormatterInput
  navLinks?: boolean
  navLinkDayClick?: string | ((date: Date, jsEvent: Event) => void)
  navLinkWeekClick?: string | ((weekStart: any, jsEvent: Event) => void)
  selectable?: boolean
  selectMirror?: boolean
  unselectAuto?: boolean
  unselectCancel?: string
  defaultAllDayEventDuration?: DurationInput
  defaultTimedEventDuration?: DurationInput
  cmdFormatter?: string
  defaultRangeSeparator?: string
  selectConstraint?: ConstraintInput
  selectOverlap?: boolean | OverlapFunc
  selectAllow?: AllowFunc
  editable?: boolean
  eventStartEditable?: boolean
  eventDurationEditable?: boolean
  eventConstraint?: ConstraintInput
  eventOverlap?: boolean | OverlapFunc // allows a function, unlike EventUi
  eventAllow?: AllowFunc
  eventClassName?: string[] | string
  eventClassNames?: string[] | string
  eventBackgroundColor?: string
  eventBorderColor?: string
  eventTextColor?: string
  eventColor?: string
  events?: EventSourceInput
  eventSources?: EventSourceInput[]
  defaultAllDay?: boolean
  startParam?: string
  endParam?: string
  lazyFetching?: boolean
  nextDayThreshold?: DurationInput
  eventOrder?: string | Array<((a: EventApi, b: EventApi) => number) | (string | ((a: EventApi, b: EventApi) => number))>
  rerenderDelay?: number | null
  dragRevertDuration?: number
  dragScroll?: boolean
  longPressDelay?: number
  eventLongPressDelay?: number
  droppable?: boolean
  dropAccept?: string | ((draggable: any) => boolean)
  eventDataTransform?: EventInputTransformer
  allDayMaintainDuration?: boolean
  eventResizableFromStart?: boolean
  eventDragMinDistance?: number
  eventSourceFailure?: any
  eventSourceSuccess?: any
  forceEventDuration?: boolean
  progressiveEventRendering?: boolean
  selectLongPressDelay?: number
  selectMinDistance?: number
  timeZoneParam?: string
  titleRangeSeparator?: string
  windowResize?(view: ViewApi): void
  dateClick?(arg: { date: Date, dateStr: string, allDay: boolean, resource?: any, dayEl: HTMLElement, jsEvent: MouseEvent, view: ViewApi }): void // resource for Scheduler
  eventClick?(arg: { el: HTMLElement, event: EventApi, jsEvent: MouseEvent, view: ViewApi }): boolean | void
  eventMouseEnter?(arg: { el: HTMLElement, event: EventApi, jsEvent: MouseEvent, view: ViewApi }): void
  eventMouseLeave?(arg: { el: HTMLElement, event: EventApi, jsEvent: MouseEvent, view: ViewApi }): void
  select?(arg: { start: Date, end: Date, startStr: string, endStr: string, allDay: boolean, resource?: any, jsEvent: MouseEvent, view: ViewApi }): void // resource for Scheduler
  unselect?(arg: { view: ViewApi, jsEvent: Event }): void
  loading?(isLoading: boolean): void
  eventDragStart?(arg: { event: EventApi, el: HTMLElement, jsEvent: MouseEvent, view: ViewApi }): void
  eventDragStop?(arg: { event: EventApi, el: HTMLElement, jsEvent: MouseEvent, view: ViewApi }): void
  eventDrop?(arg: { el: HTMLElement, event: EventApi, oldEvent: EventApi, delta: Duration, revert: () => void, jsEvent: Event, view: ViewApi }): void
  eventResizeStart?(arg: { el: HTMLElement, event: EventApi, jsEvent: MouseEvent, view: ViewApi }): void
  eventResizeStop?(arg: { el: HTMLElement, event: EventApi, jsEvent: MouseEvent, view: ViewApi }): void
  eventResize?(arg: { el: HTMLElement, startDelta: Duration, endDelta: Duration, prevEvent: EventApi, event: EventApi, revert: () => void, jsEvent: Event, view: ViewApi }): void
  drop?(arg: { date: Date, dateStr: string, allDay: boolean, draggedEl: HTMLElement, jsEvent: MouseEvent, view: ViewApi }): void
  eventReceive?(arg: { event: EventApi, draggedEl: HTMLElement, view: ViewApi }): void
  eventLeave?(arg: { draggedEl: HTMLElement, event: EventApi, view: ViewApi }): void
  _destroyed?(): void
  _init?(): void
  _noEventDrop?(): void
  _noEventResize?(): void
  [otherOptions: string]: any // TEMPORARY
}

export interface ViewOptionsInput extends OptionsInputBase {
  type?: string
  buttonText?: string
}

export interface OptionsInput extends OptionsInputBase {
  buttonText?: ButtonTextCompoundInput
  views?: { [viewId: string]: ViewOptionsInput }
  plugins?: (PluginDef | string)[]
}
