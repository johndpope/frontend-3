import {
  GroupListAction,
  List,
  GroupRegistAction,
  Regist,
  GroupDeleteAction,
  Delete,
  Edit,
  GroupEditAction,
} from './Actions';
import { B002Response, B001Response, B001Request, B004Request } from 'typings/api';
import { Consts, Paths } from '@constants';
import { push } from 'connected-react-router';
import { GroupInfo } from 'typings/types';

/** グループ一覧 */
export const list: GroupListAction = () => async (dispatch, _, api) => {
  // 画像アップロード開始イベント
  dispatch(List.request());

  try {
    const res = await api.get<B002Response>(Consts.B002_URL());
    // データ保存
    dispatch(List.success(res));
  } catch (err) {
    dispatch(List.failure(err));
  }
};

/** グループ登録 */
export const regist: GroupRegistAction = (name: string, description?: string) => async (dispatch, _, api) => {
  // 画像アップロード開始イベント
  dispatch(Regist.request());

  try {
    const res = await api.put<B001Response>(Consts.B001_URL(), {
      name,
      description,
    } as B001Request);

    // データ保存
    dispatch(
      Regist.success({
        id: res.groupId,
        name: name,
        description: description,
      })
    );

    dispatch(push(Paths.ROUTE_PATHS[Paths.ROUTE_PATH_INDEX.Groups]));
  } catch (err) {
    dispatch(Regist.failure(err));
  }
};

/** グループ編集 */
export const edit: GroupEditAction = (info: GroupInfo) => async (dispatch, store, api) => {
  // 開始イベント
  dispatch(Edit.request());

  try {
    // グループ編集API
    await api.put(Consts.B004_URL(info.id), {
      name: info.name,
      description: info.description,
    } as B004Request);

    // グループ再取得
    dispatch(list());
    // グループ一覧画面に遷移する
    dispatch(push(Paths.ROUTE_PATHS[Paths.ROUTE_PATH_INDEX.Groups]));
    // 正常終了
    dispatch(Edit.success());
  } catch (err) {
    dispatch(Edit.failure(err));
  }
};

/** グループ削除 */
export const del: GroupDeleteAction = () => async (dispatch, store, api) => {
  // 画像アップロード開始イベント
  dispatch(Delete.request());

  try {
    // 選択中のGroupId
    const groupId = store().get('app').get('groupId');

    // グループ削除API
    await api.del(Consts.B005_URL(groupId));

    // グループ再取得
    dispatch(list());
    // グループ一覧画面に遷移する
    dispatch(push(Paths.ROUTE_PATHS[Paths.ROUTE_PATH_INDEX.Groups]));
    // 正常終了
    dispatch(Delete.success());
  } catch (err) {
    dispatch(Delete.failure(err));
  }
};
