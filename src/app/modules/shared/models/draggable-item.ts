import { EffectAllowed } from 'ngx-drag-drop';

export interface DraggableItem {
  content: string;
  effectAllowed: EffectAllowed;
  disable: boolean;
  handle: boolean;
}
