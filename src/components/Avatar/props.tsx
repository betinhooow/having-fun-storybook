import { DefaultPrivateProps } from '../../utils/DefaultPrivateProps';

export interface AvatarProps {
  /**
   * Unique id to controll each element
   */
  id: string;
  name: string;
  nickname: string;
  /**
   * Function called when clicked on edit button
   */
  editContact(id: string): void;
  /**
   * Function called when clicked on delete button
   */
  deleteContact(id: string): void;
}

export interface AvatarInterface extends AvatarProps, DefaultPrivateProps {}