import { BlockIDArgs, EmptyArgs, InputIDArgs, SnapEventArgs, SnapEventListener, ValueArgs } from "./SnapEventListener";
export namespace Events {
    export namespace Block {
        export interface ClickRunArgs extends SnapEventArgs {
            value: BlockIDArgs;
        }

        export class ClickRunListener extends SnapEventListener {
            static readonly type = 'Block.clickRun';
            constructor(args: (args: ClickRunArgs) => void) {
                super(ClickRunListener.type, args);
            }
        }
        export interface ClickStopRunArgs extends SnapEventArgs {
            value: BlockIDArgs;
        }

        export class ClickStopRunListener extends SnapEventListener {
            static readonly type = 'Block.clickStopRun';
            constructor(args: (args: ClickStopRunArgs) => void) {
                super(ClickStopRunListener.type, args);
            }
        }
        export interface CreatedArgs extends SnapEventArgs {
            value: BlockIDArgs;
        }

        export class CreatedListener extends SnapEventListener {
            static readonly type = 'Block.created';
            constructor(args: (args: CreatedArgs) => void) {
                super(CreatedListener.type, args);
            }
        }
        export interface DragDestroyArgs extends SnapEventArgs {
            value: BlockIDArgs;
        }

        export class DragDestroyListener extends SnapEventListener {
            static readonly type = 'Block.dragDestroy';
            constructor(args: (args: DragDestroyArgs) => void) {
                super(DragDestroyListener.type, args);
            }
        }

        export class GrabbedListener extends SnapEventListener {
            static readonly type = 'Block.grabbed';
            constructor(args: (args: ValueArgs) => void) {
                super(GrabbedListener.type, args);
            }
        }

        export class RefactorVarListener extends SnapEventListener {
            static readonly type = 'Block.refactorVar';
            constructor(args: (args: ValueArgs) => void) {
                super(RefactorVarListener.type, args);
            }
        }

        export class RefactorVarErrorListener extends SnapEventListener {
            static readonly type = 'Block.refactorVarError';
            constructor(args: (args: ValueArgs) => void) {
                super(RefactorVarErrorListener.type, args);
            }
        }

        export class RelabelListener extends SnapEventListener {
            static readonly type = 'Block.relabel';
            constructor(args: (args: ValueArgs) => void) {
                super(RelabelListener.type, args);
            }
        }

        export class RenameListener extends SnapEventListener {
            static readonly type = 'Block.rename';
            constructor(args: (args: ValueArgs) => void) {
                super(RenameListener.type, args);
            }
        }
        export interface RingifyArgs extends SnapEventArgs {
            value: BlockIDArgs;
        }

        export class RingifyListener extends SnapEventListener {
            static readonly type = 'Block.ringify';
            constructor(args: (args: RingifyArgs) => void) {
                super(RingifyListener.type, args);
            }
        }
        export interface ScriptPicArgs extends SnapEventArgs {
            value: BlockIDArgs;
        }

        export class ScriptPicListener extends SnapEventListener {
            static readonly type = 'Block.scriptPic';
            constructor(args: (args: ScriptPicArgs) => void) {
                super(ScriptPicListener.type, args);
            }
        }
        export interface ShowHelpArgs extends SnapEventArgs {
            value: BlockIDArgs;
        }

        export class ShowHelpListener extends SnapEventListener {
            static readonly type = 'Block.showHelp';
            constructor(args: (args: ShowHelpArgs) => void) {
                super(ShowHelpListener.type, args);
            }
        }

        export class SnappedListener extends SnapEventListener {
            static readonly type = 'Block.snapped';
            constructor(args: (args: ValueArgs) => void) {
                super(SnappedListener.type, args);
            }
        }

        export class ToggleTransientVariableListener extends SnapEventListener {
            static readonly type = 'Block.toggleTransientVariable';
            constructor(args: (args: ValueArgs) => void) {
                super(ToggleTransientVariableListener.type, args);
            }
        }
        export interface UnringifyArgs extends SnapEventArgs {
            value: BlockIDArgs;
        }

        export class UnringifyListener extends SnapEventListener {
            static readonly type = 'Block.unringify';
            constructor(args: (args: UnringifyArgs) => void) {
                super(UnringifyListener.type, args);
            }
        }
        export interface UserDestroyArgs extends SnapEventArgs {
            value: BlockIDArgs;
        }

        export class UserDestroyListener extends SnapEventListener {
            static readonly type = 'Block.userDestroy';
            constructor(args: (args: UserDestroyArgs) => void) {
                super(UserDestroyListener.type, args);
            }
        }
    }

    export namespace BlockEditor {

        export class CancelListener extends SnapEventListener {
            static readonly type = 'BlockEditor.cancel';
            constructor(args: (args: ValueArgs) => void) {
                super(CancelListener.type, args);
            }
        }

        export class ChangeTypeListener extends SnapEventListener {
            static readonly type = 'BlockEditor.changeType';
            constructor(args: (args: ValueArgs) => void) {
                super(ChangeTypeListener.type, args);
            }
        }

        export class OkListener extends SnapEventListener {
            static readonly type = 'BlockEditor.ok';
            constructor(args: (args: ValueArgs) => void) {
                super(OkListener.type, args);
            }
        }

        export class StartListener extends SnapEventListener {
            static readonly type = 'BlockEditor.start';
            constructor(args: (args: ValueArgs) => void) {
                super(StartListener.type, args);
            }
        }
        export interface UpdateBlockLabelArgs extends SnapEventArgs {
            newFragment: any;
        }

        export class UpdateBlockLabelListener extends SnapEventListener {
            static readonly type = 'BlockEditor.updateBlockLabel';
            constructor(args: (args: UpdateBlockLabelArgs) => void) {
                super(UpdateBlockLabelListener.type, args);
            }
        }
    }

    export namespace BlockTypeDialog {

        export class CancelListener extends SnapEventListener {
            static readonly type = 'BlockTypeDialog.cancel';
            constructor(args: (args: EmptyArgs) => void) {
                super(CancelListener.type, args);
            }
        }

        export class ChangeBlockTypeListener extends SnapEventListener {
            static readonly type = 'BlockTypeDialog.changeBlockType';
            constructor(args: (args: EmptyArgs) => void) {
                super(ChangeBlockTypeListener.type, args);
            }
        }

        export class NewBlockListener extends SnapEventListener {
            static readonly type = 'BlockTypeDialog.newBlock';
            constructor(args: (args: EmptyArgs) => void) {
                super(NewBlockListener.type, args);
            }
        }

        export class OkListener extends SnapEventListener {
            static readonly type = 'BlockTypeDialog.ok';
            constructor(args: (args: EmptyArgs) => void) {
                super(OkListener.type, args);
            }
        }
    }

    export namespace BooleanSlotMorph {

        export class ToggleValueListener extends SnapEventListener {
            static readonly type = 'BooleanSlotMorph.toggleValue';
            constructor(args: (args: ValueArgs) => void) {
                super(ToggleValueListener.type, args);
            }
        }
    }

    export namespace ColorArg {

        export class ChangeColorListener extends SnapEventListener {
            static readonly type = 'ColorArg.changeColor';
            constructor(args: (args: ValueArgs) => void) {
                super(ChangeColorListener.type, args);
            }
        }
    }

    export namespace CommandBlock {

        export class WrapListener extends SnapEventListener {
            static readonly type = 'CommandBlock.wrap';
            constructor(args: (args: ValueArgs) => void) {
                super(WrapListener.type, args);
            }
        }
    }

    export namespace IDE {
        export interface AddSpriteArgs extends SnapEventArgs {
            name: any;
        }

        export class AddSpriteListener extends SnapEventListener {
            static readonly type = 'IDE.addSprite';
            constructor(args: (args: AddSpriteArgs) => void) {
                super(AddSpriteListener.type, args);
            }
        }
        export interface ChangeCategoryArgs extends SnapEventArgs {
            category: any;
        }

        export class ChangeCategoryListener extends SnapEventListener {
            static readonly type = 'IDE.changeCategory';
            constructor(args: (args: ChangeCategoryArgs) => void) {
                super(ChangeCategoryListener.type, args);
            }
        }

        export class DeleteCustomBlockListener extends SnapEventListener {
            static readonly type = 'IDE.deleteCustomBlock';
            constructor(args: (args: ValueArgs) => void) {
                super(DeleteCustomBlockListener.type, args);
            }
        }
        export interface DuplicateSpriteArgs extends SnapEventArgs {
            name: any;
        }

        export class DuplicateSpriteListener extends SnapEventListener {
            static readonly type = 'IDE.duplicateSprite';
            constructor(args: (args: DuplicateSpriteArgs) => void) {
                super(DuplicateSpriteListener.type, args);
            }
        }

        export class ExportGlobalBlocksListener extends SnapEventListener {
            static readonly type = 'IDE.exportGlobalBlocks';
            constructor(args: (args: EmptyArgs) => void) {
                super(ExportGlobalBlocksListener.type, args);
            }
        }
        export interface ExportProejctAsCloudDataArgs extends SnapEventArgs {
            name: any;
        }

        export class ExportProejctAsCloudDataListener extends SnapEventListener {
            static readonly type = 'IDE.exportProejctAsCloudData';
            constructor(args: (args: ExportProejctAsCloudDataArgs) => void) {
                super(ExportProejctAsCloudDataListener.type, args);
            }
        }
        export interface ExportProjectArgs extends SnapEventArgs {
            name: any;
        }

        export class ExportProjectListener extends SnapEventListener {
            static readonly type = 'IDE.exportProject';
            constructor(args: (args: ExportProjectArgs) => void) {
                super(ExportProjectListener.type, args);
            }
        }
        export interface ExportProjectMediaArgs extends SnapEventArgs {
            name: any;
        }

        export class ExportProjectMediaListener extends SnapEventListener {
            static readonly type = 'IDE.exportProjectMedia';
            constructor(args: (args: ExportProjectMediaArgs) => void) {
                super(ExportProjectMediaListener.type, args);
            }
        }
        export interface ExportProjectNoMediaArgs extends SnapEventArgs {
            name: any;
        }

        export class ExportProjectNoMediaListener extends SnapEventListener {
            static readonly type = 'IDE.exportProjectNoMedia';
            constructor(args: (args: ExportProjectNoMediaArgs) => void) {
                super(ExportProjectNoMediaListener.type, args);
            }
        }

        export class ExportScriptsPictureListener extends SnapEventListener {
            static readonly type = 'IDE.exportScriptsPicture';
            constructor(args: (args: EmptyArgs) => void) {
                super(ExportScriptsPictureListener.type, args);
            }
        }
        export interface ExportSpriteArgs extends SnapEventArgs {
            name: any;
        }

        export class ExportSpriteListener extends SnapEventListener {
            static readonly type = 'IDE.exportSprite';
            constructor(args: (args: ExportSpriteArgs) => void) {
                super(ExportSpriteListener.type, args);
            }
        }

        export class GreenFlagListener extends SnapEventListener {
            static readonly type = 'IDE.greenFlag';
            constructor(args: (args: EmptyArgs) => void) {
                super(GreenFlagListener.type, args);
            }
        }
        export interface LoadFailedArgs extends SnapEventArgs {
            err: any;
        }

        export class LoadFailedListener extends SnapEventListener {
            static readonly type = 'IDE.loadFailed';
            constructor(args: (args: LoadFailedArgs) => void) {
                super(LoadFailedListener.type, args);
            }
        }

        export class NewProjectListener extends SnapEventListener {
            static readonly type = 'IDE.newProject';
            constructor(args: (args: EmptyArgs) => void) {
                super(NewProjectListener.type, args);
            }
        }

        export class OpenBlocksStringListener extends SnapEventListener {
            static readonly type = 'IDE.openBlocksString';
            constructor(args: (args: EmptyArgs) => void) {
                super(OpenBlocksStringListener.type, args);
            }
        }

        export class OpenCloudDataStringListener extends SnapEventListener {
            static readonly type = 'IDE.openCloudDataString';
            constructor(args: (args: EmptyArgs) => void) {
                super(OpenCloudDataStringListener.type, args);
            }
        }

        export class OpenMediaStringListener extends SnapEventListener {
            static readonly type = 'IDE.openMediaString';
            constructor(args: (args: EmptyArgs) => void) {
                super(OpenMediaStringListener.type, args);
            }
        }
        export interface OpenProjectArgs extends SnapEventArgs {
            name: any;
        }

        export class OpenProjectListener extends SnapEventListener {
            static readonly type = 'IDE.openProject';
            constructor(args: (args: OpenProjectArgs) => void) {
                super(OpenProjectListener.type, args);
            }
        }

        export class OpenProjectStringListener extends SnapEventListener {
            static readonly type = 'IDE.openProjectString';
            constructor(args: (args: EmptyArgs) => void) {
                super(OpenProjectStringListener.type, args);
            }
        }

        export class OpenSpritesStringListener extends SnapEventListener {
            static readonly type = 'IDE.openSpritesString';
            constructor(args: (args: EmptyArgs) => void) {
                super(OpenSpritesStringListener.type, args);
            }
        }

        export class OpenedListener extends SnapEventListener {
            static readonly type = 'IDE.opened';
            constructor(args: (args: EmptyArgs) => void) {
                super(OpenedListener.type, args);
            }
        }
        export interface PaintNewSpriteArgs extends SnapEventArgs {
            name: any;
        }

        export class PaintNewSpriteListener extends SnapEventListener {
            static readonly type = 'IDE.paintNewSprite';
            constructor(args: (args: PaintNewSpriteArgs) => void) {
                super(PaintNewSpriteListener.type, args);
            }
        }

        export class PauseListener extends SnapEventListener {
            static readonly type = 'IDE.pause';
            constructor(args: (args: EmptyArgs) => void) {
                super(PauseListener.type, args);
            }
        }
        export interface RotationStyleChangedArgs extends SnapEventArgs {
            rotationStyle: any;
        }

        export class RotationStyleChangedListener extends SnapEventListener {
            static readonly type = 'IDE.rotationStyleChanged';
            constructor(args: (args: RotationStyleChangedArgs) => void) {
                super(RotationStyleChangedListener.type, args);
            }
        }
        export interface SaveProjectToCloudArgs extends SnapEventArgs {
            name: any;
        }

        export class SaveProjectToCloudListener extends SnapEventListener {
            static readonly type = 'IDE.saveProjectToCloud';
            constructor(args: (args: SaveProjectToCloudArgs) => void) {
                super(SaveProjectToCloudListener.type, args);
            }
        }
        export interface SelectSpriteArgs extends SnapEventArgs {
            name: any;
        }

        export class SelectSpriteListener extends SnapEventListener {
            static readonly type = 'IDE.selectSprite';
            constructor(args: (args: SelectSpriteArgs) => void) {
                super(SelectSpriteListener.type, args);
            }
        }
        export interface SetLanguageArgs extends SnapEventArgs {
            lang: any;
        }

        export class SetLanguageListener extends SnapEventListener {
            static readonly type = 'IDE.setLanguage';
            constructor(args: (args: SetLanguageArgs) => void) {
                super(SetLanguageListener.type, args);
            }
        }
        export interface SetSpriteDraggableArgs extends SnapEventArgs {
            isDraggable: any;
        }

        export class SetSpriteDraggableListener extends SnapEventListener {
            static readonly type = 'IDE.setSpriteDraggable';
            constructor(args: (args: SetSpriteDraggableArgs) => void) {
                super(SetSpriteDraggableListener.type, args);
            }
        }
        export interface SetSpriteTabArgs extends SnapEventArgs {
            tabString: any;
        }

        export class SetSpriteTabListener extends SnapEventListener {
            static readonly type = 'IDE.setSpriteTab';
            constructor(args: (args: SetSpriteTabArgs) => void) {
                super(SetSpriteTabListener.type, args);
            }
        }

        export class StopListener extends SnapEventListener {
            static readonly type = 'IDE.stop';
            constructor(args: (args: EmptyArgs) => void) {
                super(StopListener.type, args);
            }
        }
        export interface ToggleAppModeArgs extends SnapEventArgs {
            isAppMode: any;
        }

        export class ToggleAppModeListener extends SnapEventListener {
            static readonly type = 'IDE.toggleAppMode';
            constructor(args: (args: ToggleAppModeArgs) => void) {
                super(ToggleAppModeListener.type, args);
            }
        }
        export interface ToggleStageSizeArgs extends SnapEventArgs {
            isSmallStage: any;
        }

        export class ToggleStageSizeListener extends SnapEventListener {
            static readonly type = 'IDE.toggleStageSize';
            constructor(args: (args: ToggleStageSizeArgs) => void) {
                super(ToggleStageSizeListener.type, args);
            }
        }

        export class UnpauseListener extends SnapEventListener {
            static readonly type = 'IDE.unpause';
            constructor(args: (args: EmptyArgs) => void) {
                super(UnpauseListener.type, args);
            }
        }
    }

    export namespace InputSlot {

        export class EditedListener extends SnapEventListener {
            static readonly type = 'InputSlot.edited';
            constructor(args: (args: ValueArgs) => void) {
                super(EditedListener.type, args);
            }
        }

        export class MenuItemSelectedListener extends SnapEventListener {
            static readonly type = 'InputSlot.menuItemSelected';
            constructor(args: (args: ValueArgs) => void) {
                super(MenuItemSelectedListener.type, args);
            }
        }
    }

    export namespace MultiArg {
        export interface AddInputArgs extends SnapEventArgs {
            value: InputIDArgs;
        }

        export class AddInputListener extends SnapEventListener {
            static readonly type = 'MultiArg.addInput';
            constructor(args: (args: AddInputArgs) => void) {
                super(AddInputListener.type, args);
            }
        }
        export interface RemoveInputArgs extends SnapEventArgs {
            value: InputIDArgs;
        }

        export class RemoveInputListener extends SnapEventListener {
            static readonly type = 'MultiArg.removeInput';
            constructor(args: (args: RemoveInputArgs) => void) {
                super(RemoveInputListener.type, args);
            }
        }
    }

    export namespace ProjectDialog {
        export interface SetSourceArgs extends SnapEventArgs {
            source: any;
        }

        export class SetSourceListener extends SnapEventListener {
            static readonly type = 'ProjectDialog.setSource';
            constructor(args: (args: SetSourceArgs) => void) {
                super(SetSourceListener.type, args);
            }
        }

        export class ShareProjectListener extends SnapEventListener {
            static readonly type = 'ProjectDialog.shareProject';
            constructor(args: (args: ValueArgs) => void) {
                super(ShareProjectListener.type, args);
            }
        }

        export class ShownListener extends SnapEventListener {
            static readonly type = 'ProjectDialog.shown';
            constructor(args: (args: EmptyArgs) => void) {
                super(ShownListener.type, args);
            }
        }
        export interface UnshareProjectArgs extends SnapEventArgs {
            ProjectName: any;
        }

        export class UnshareProjectListener extends SnapEventListener {
            static readonly type = 'ProjectDialog.unshareProject';
            constructor(args: (args: UnshareProjectArgs) => void) {
                super(UnshareProjectListener.type, args);
            }
        }
    }

    export namespace Scripts {

        export class CleanUpListener extends SnapEventListener {
            static readonly type = 'Scripts.cleanUp';
            constructor(args: (args: EmptyArgs) => void) {
                super(CleanUpListener.type, args);
            }
        }

        export class ExportPictureListener extends SnapEventListener {
            static readonly type = 'Scripts.exportPicture';
            constructor(args: (args: EmptyArgs) => void) {
                super(ExportPictureListener.type, args);
            }
        }

        export class RedropListener extends SnapEventListener {
            static readonly type = 'Scripts.redrop';
            constructor(args: (args: ValueArgs) => void) {
                super(RedropListener.type, args);
            }
        }

        export class UndropListener extends SnapEventListener {
            static readonly type = 'Scripts.undrop';
            constructor(args: (args: ValueArgs) => void) {
                super(UndropListener.type, args);
            }
        }
    }

    export namespace Sprite {
        export interface AddVariableArgs extends SnapEventArgs {
            name: any;
        }

        export class AddVariableListener extends SnapEventListener {
            static readonly type = 'Sprite.addVariable';
            constructor(args: (args: AddVariableArgs) => void) {
                super(AddVariableListener.type, args);
            }
        }
        export interface DeleteVariableArgs extends SnapEventArgs {
            varName: any;
        }

        export class DeleteVariableListener extends SnapEventListener {
            static readonly type = 'Sprite.deleteVariable';
            constructor(args: (args: DeleteVariableArgs) => void) {
                super(DeleteVariableListener.type, args);
            }
        }
        export interface SetNameArgs extends SnapEventArgs {
            string: any;
        }

        export class SetNameListener extends SnapEventListener {
            static readonly type = 'Sprite.setName';
            constructor(args: (args: SetNameArgs) => void) {
                super(SetNameListener.type, args);
            }
        }
    }

    export namespace XML {
        export interface ParseFailedArgs extends SnapEventArgs {
            xmlString: any;
        }

        export class ParseFailedListener extends SnapEventListener {
            static readonly type = 'XML.parseFailed';
            constructor(args: (args: ParseFailedArgs) => void) {
                super(ParseFailedListener.type, args);
            }
        }
    }
}
