import SideBar from "./SideBar.js";
import Editor from "./Editor.js";

import { getDatas } from "../utils/fetchData.js";
export default function App({
  $target,
  initialSideBarState,
  initialEditorState,
}) {
  const $main = document.createElement("main");
  $target.appendChild($main);

  this.idState = 0;

  this.setIdState = (nextState) => {
    this.idState = nextState;

    editor.setIdState(nextState);
  };

  /*{
    "id": 6,
    "title": "문서 제목",
    "createdAt": "생성된 날짜",
    "updatedAt": "수정된 날짜"
    } 
  */
  const sideBar = new SideBar({
    $target: $main,
    initialState: initialSideBarState,
    pushIdForEditor: (id) => {
      this.setIdState(id);
    },
  });

  const editor = new Editor({
    $target: $main,
    initalState: initialEditorState,
    renderSideBar: () => {
      getDatas().then((data) => {
        sideBar.setState(data);
      });
    },
  });
}
