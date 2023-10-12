
export class SnapType {
    prototype: any;
    [key: string]: any;
}

export function contains(list?: any, element?: any);

export function copy(target?: any);

export function copyCanvas(aCanvas?: any);

export function degrees(radians?: any);

export function detect(list?: any, predicate?: any);

export function disableRetinaSupport();

export function embedMetadataPNG(aCanvas?: any, aString?: any);

export function enableRetinaSupport();

export function fontHeight(height?: any);

export function getDocumentPositionOf(aDOMelement?: any);

export function getMinimumFontHeight();

export function getSEFConfig();

export function hex_sha512(s?: any);

export function invoke(action?: any, contextArgs?: any, receiver?: any, timeout?: any, timeoutErrorMsg?: any, suppressErrors?: any, callerProcess?: any, returnContext?: any);

export function isNil(thing?: any);

export function isObject(target?: any);

export function isRetinaEnabled();

export function isRetinaSupported();

export function isSnapObject(thing?: any);

export function isString(target?: any);

export function isURL(text?: any);

export function isURLChar(aCharacter?: any);

export function isWordChar(aCharacter?: any);

export function localize(string?: any);

export function m(e?: any, t?: any, n?: any);

export function newCanvas(extentPoint?: any, nonRetina?: any, recycleMe?: any);

export function newGuid();

export function nop();

export function normalizeCanvas(aCanvas?: any, getCopy?: any);

export function radians(degrees?: any);

export function sizeOf(object?: any);

export function Snap();

export function snapEquals(a?: any, b?: any);

export class AlignmentMorph extends Morph {
    alignment: string;
    orientation: string;
    padding: number;
    respectHiddens: boolean;

    constructor(orientation?: any, padding?: any);
    fixLayout();
    init(orientation?: string, padding?: number);
    render(ctx?: CanvasRenderingContext2D);
}

export class Animation extends SnapType {
    delta: any;
    destination: any;
    duration: any;
    easing: any;
    endTime: any;
    getter: any;
    isActive: any;
    onComplete: any;
    setter: any;

    constructor(setter?: any, getter?: any, delta?: any, duration?: any, easing?: any, onComplete?: any);
    start();
    step();
}

export class ArgLabelMorph extends ArgMorph {
    alpha: any;
    isStatic: any;
    labelText: any;

    argMorph();
    constructor(argMorph?: any, labelTxt?: any);
    evaluate();
    fixLayout();
    init(argMorph?: any, labelTxt?: any);
    isEmptySlot();
    label();
    reactToGrabOf();
    refresh();
    setLabelColor(textColor?: any, shadowColor?: any, shadowOffset?: any);
    toXML(serializer?: any);
}

export class ArgMorph extends SyntaxElementMorph {
    alpha: number;
    color: Color;
    icon: BlockSymbolMorph;
    type: string;

    argId();
    constructor(type?: any);
    createIcon();
    evaluate();
    fixLayout();
    getSpec();
    init(type?: string);
    isEmptySlot();
    justDropped();
    reactToSliderEdit();
    render(ctx?: CanvasRenderingContext2D);
    slotMenu();
    toXML();
    unwind();
    userMenu();
}

export class ArrowMorph extends Morph {
    color: Color;
    direction: string;
    isBlockLabel: boolean;
    padding: number;
    size: number;

    constructor(direction?: any, size?: any, padding?: any, color?: any, isBlockLabel?: any);
    getRenderColor();
    init(direction?: string, size?: number, padding?: number, color?: Color, isLbl?: boolean);
    render(ctx?: CanvasRenderingContext2D);
    setSize(size?: number);
}

export class BlinkerMorph extends Morph {
    color: Color;
    fps: number;

    constructor(rate?: any);
    init(rate?: any);
    step();
}

export class BlockDialogMorph extends DialogBoxMorph {
    blockType: any;
    categories: any;
    category: any;
    isGlobal: any;
    key: any;
    scopes: any;
    types: any;

    accept();
    addBlockTypeButton(action?: any, element?: any, query?: any);
    addCategoryButton(category?: any);
    addCustomCategoryButton(category?: any, clr?: any);
    addScopeButton(action?: any, label?: any, query?: any);
    addTypeButton(action?: any, label?: any, query?: any);
    cancel();
    constructor(target?: any, action?: any, environment?: any);
    createCategoryButtons();
    createScopeButtons();
    createTypeButtons();
    fixCategoriesLayout();
    fixLayout();
    getInput();
    init(target?: any, action?: any, environment?: any);
    ok();
    openForChange(title?: any, category?: any, type?: any, world?: any, pic?: any, preventTypeChange?: any);
    prompt();
    setScope(varType?: any);
    setType(blockType?: any);
}

export class BlockEditorMorph extends DialogBoxMorph {
    definition: any;
    handle: any;
    key: any;
    labelString: any;
    translations: any;

    accept(origin?: any);
    cancel(origin?: any);
    close();
    consolidateDoubles();
    constructor(definition?: any, target?: any);
    context(prototypeHat?: any);
    deduplicateBlockIDs();
    editTranslations();
    fixLayout();
    getDefinitionJSON(definition?: any);
    init(definition?: any, target?: any);
    isHelper();
    justDropped();
    ok();
    popUp();
    prototypeSlots();
    prototypeSpec();
    refreshAllBlockInstances(oldSpec?: any);
    setInitialDimensions();
    updateDefinition();
    variableNames();
}

export class BlockExportDialogMorph extends DialogBoxMorph {
    blocks: any;
    globalData: any;
    globalVarNames: any;
    handle: any;
    labelString: any;
    localData: any;
    localVarNames: any;
    serializer: any;

    buildContents();
    collectDataDependencies();
    collectDependencies();
    constructor(serializer?: any, blocks?: any, target?: any);
    dependencies();
    exportBlocks();
    fixLayout();
    init(serializer?: any, blocks?: any, target?: any);
    popUp(wrrld?: any);
    selectAll();
    selectNone();
    userMenu();
}

export class BlockHighlightMorph extends Morph {
    isCachingImage: boolean;
    threadCount: number;

    constructor();
    init();
    readout();
    updateReadout();
}

export class BlockImportDialogMorph extends DialogBoxMorph {
    blocks: any;
    handle: any;
    labelString: any;

    buildContents();
    constructor(blocks?: any, target?: any, name?: any);
    fixLayout();
    importBlocks(name?: any);
    init(blocks?: any, target?: any, name?: any);
    popUp(wrrld?: any);
    selectAll();
    selectNone();
    userMenu();
}

export class BlockInputFragmentMorph extends TemplateSlotMorph {
    fragment: any;

    constructor(text?: any);
    init(text?: any);
    mouseClickLeft();
    updateBlockLabel(newFragment?: any);
}

export class BlockLabelFragment extends SnapType {
    defaultValue: any;
    isDeleted: any;
    isIrreplaceable: any;
    isReadOnly: any;
    labelString: any;
    options: any;
    separator: any;
    type: any;

    blockSpecFragment();
    constructor(labelString?: any);
    copy();
    defSpecFragment();
    defTemplateSpecFragment();
    hasExtensionMenu();
    hasOptions();
    hasSpecialMenu();
    isMultipleInput();
    isSingleInput();
    isUpvar();
    setSingleInputType(type?: any);
    setToMultipleInput();
    setToSingleInput();
    setToUpvar();
    singleInputType();
}

export class BlockLabelFragmentMorph extends Morph {
    fragment: any;
    sO: any;
    shape: any;
    spec: any;

    constructor(spec?: any, shape?: any);
    fixLayout();
    init(spec?: any, shape?: any);
    mouseClickLeft();
    mouseEnter();
    mouseLeave();
    render();
    updateBlockLabel(newFragment?: any);
    userMenu();
}

export class BlockLabelMorph extends StringMorph {
    blanksColor: Color;
    color: Color;
    currentlySelecting: boolean;
    enableLinks: boolean;
    endMark: number;
    fontName: string;
    fontSize: number;
    fontStyle: string;
    isBold: boolean;
    isEditable: boolean;
    isItalic: boolean;
    isNumeric: boolean;
    isPassword: boolean;
    isScrollable: boolean;
    isShowingBlanks: boolean;
    markedBackgoundColor: Color;
    markedTextColor: Color;
    shadowColor: Color;
    shadowOffset: Point;
    startMark: number;
    text: string;

    constructor(text?: any, fontSize?: any, fontStyle?: any, bold?: any, italic?: any, isNumeric?: any, shadowOffset?: any, shadowColor?: any, color?: any, fontName?: any);
    getRenderColor();
    getShadowRenderColor();
}

export class BlockLabelPlaceHolderMorph extends Morph {
    fragment: any;
    isHighlighted: any;

    constructor();
    fixLayout();
    init();
    mouseClickLeft();
    mouseEnter();
    mouseLeave();
    render(ctx?: any);
    updateBlockLabel(newFragment?: any);
}

export class BlockMorph extends SyntaxElementMorph {
    blockSpec: string;
    cachedInputs: any[];
    category: string;
    color: Color;
    comment: CommentMorph;
    id: number;
    instantiationSpec: any;
    isCorpse: boolean;
    selector: string;

    abstractBlockSpec();
    activeProcess();
    addErrorHighlight();
    addHighlight(oldHighlight?: any);
    allComments();
    alternateBlockColor();
    blockId();
    buildSpec();
    cSlots();
    clearAlpha();
    codeDefinitionHeader();
    codeMappingHeader();
    components(parameterNames?: any);
    constructor();
    copy();
    copyWithInputs(inputs?: any);
    copyWithNext(next?: any, parameterNames?: any);
    deleteBlock();
    dependencies(onlyGlobal?: any, receiver?: any);
    destroy(justThis?: any);
    developersMenu();
    drawMethodIcon(ctx?: any);
    elementsAtLOC(definitions?: any);
    equalTo(other?: any);
    exportResultPic();
    exportScript();
    fixBlockColor(nearestBlock?: CommandBlockMorph, isForced?: boolean);
    fixChildrensBlockColor(isForced?: boolean);
    fixLabelColor();
    focus();
    forceNormalColoring();
    fullCopy();
    fullImage();
    fullScopeFor(varName?: any, afterThis?: any);
    getHighlight();
    getNewID();
    getVarName();
    ghost();
    hasBlockVars();
    hasLabels();
    hasLocationPin();
    highlight(color?: Color, blur?: number, border?: number);
    highlightImage(color?: any, border?: any);
    highlightImageBlurred(color?: Color, blur?: number);
    init();
    isChangeableTo(type?: any);
    isInheritedVariable(shadowedOnly?: any);
    isSending(message?: any, receiverName?: any, known?: any);
    isTransientVariable();
    isUnattached();
    isVariableAccessorFor(varName?: any);
    justDropped();
    localizeBlockSpec(spec?: string);
    mapCode(aString?: any, key?: any);
    mapHeader(aString?: any, key?: any);
    mapToCode();
    mapToHeader();
    mappedCode(definitions?: any);
    markEmptySlots();
    messageUsers();
    mouseClickLeft();
    mouseDownLeft(pos?: Point);
    mouseEnterBounds(dragged?: BlockMorph);
    mouseLeaveBounds(dragged?: BlockMorph);
    outline(color?: any, border?: any);
    parseSpec(spec?: string);
    pickUp(wrrld?: any);
    prepareToBeGrabbed(hand?: HandMorph);
    reactToDropOf(droppedMorph?: any);
    reactToTemplateCopy();
    rebuild(contrast?: any);
    refactorInlineTemplate();
    refactorPaletteTemplate(everywhere?: any);
    refactorVariable(name?: any, newName?: any, afterThis?: any);
    reify(inputNames?: any, comment?: any);
    relabel(alternativeSelectors?: any);
    removeHighlight();
    render(ctx?: CanvasRenderingContext2D);
    restoreInputs(oldInputs?: any, offset?: any);
    rewind(scriptOnly?: any);
    ringify();
    rootForGrab();
    scopeFor(varName?: any, afterThis?: any);
    scriptPic();
    scriptTarget(noError?: boolean);
    setCategory(aString?: string);
    setSelector(aSelector?: any, inputOffset?: any);
    setSpec(spec?: string, definition?: CustomBlockDefinition);
    showHelp();
    showMessageUsers();
    situation();
    snap();
    stackFullBounds();
    stackHeight();
    stackWidth();
    syntaxTree(parameterNames?: any);
    thumbnail(scale?: any, clipWidth?: any);
    toBlockXML(serializer?: SnapSerializer);
    toScriptXML(serializer?: SnapSerializer, savePosition?: boolean);
    toString();
    toXML(serializer?: SnapSerializer, savePosition?: any);
    toXMLString(receiver?: any);
    toggleHighlight();
    toggleSnapSound();
    toggleTransientVariable();
    type();
    unringify();
    unwind();
    unwindAfter(element?: any);
    userDestroy();
    userMenu();
    userSetSpec(spec?: any);
    wantsDropOf(aMorph?: any);
}

export class BlockRemovalDialogMorph extends DialogBoxMorph {
    blocks: any;
    handle: any;
    labelString: any;

    buildContents();
    collectDependencies();
    constructor(blocks?: any, target?: any, name?: any);
    dependencies();
    fixLayout();
    init(blocks?: any, target?: any);
    popUp(wrrld?: any);
    removeBlocks();
    selectAll();
    selectNone();
    userMenu();
}

export class BlockSymbolMorph extends SymbolMorph {
    backgroundColor: any;
    color: Color;
    isProtectedLabel: boolean;
    isReadOnly: boolean;
    name: string;
    shadowColor: Color;
    shadowOffset: Point;
    size: number;

    constructor(name?: any, size?: any, color?: any, shadowOffset?: any, shadowColor?: any);
    getRenderColor();
    getShadowRenderColor();
}

export class BlockVisibilityDialogMorph extends DialogBoxMorph {
    blocks: any;
    handle: any;
    labelString: any;
    selection: any;

    buildContents();
    constructor(target?: any);
    fixLayout();
    hideBlocks();
    init(target?: any);
    popUp(wrrld?: any);
    selectAll();
    selectNone();
    selectUnused();
    userMenu();
}

export class BooleanSlotMorph extends ArgMorph {
    alpha: number;
    isUnevaluated: boolean;
    progress: number;
    value: boolean;

    constructor(initialValue?: any);
    drawDiamond(ctx?: CanvasRenderingContext2D, progress?: number);
    drawKnob(ctx?: CanvasRenderingContext2D, progress?: number);
    drawLabel(ctx?: CanvasRenderingContext2D);
    evaluate();
    fixLayout();
    getSpec();
    init(initialValue?: any);
    isBinary();
    isEmptySlot();
    mapFalseToCode();
    mapTrueToCode();
    mappedCode();
    mouseClickLeft();
    mouseEnter();
    mouseLeave();
    nextValue();
    render(ctx?: CanvasRenderingContext2D);
    setContents(boolOrNull?: boolean);
    slotMenu();
    textLabelExtent();
    toXML();
    toggleValue();
}

export class BouncerMorph extends Morph {
    direction: any;
    fps: any;
    isStopped: any;
    speed: any;
    type: any;

    constructor();
    init(type?: any, speed?: any);
    moveDown();
    moveLeft();
    moveRight();
    moveUp();
    step();
}

export class BoxMorph extends Morph {
    border: number;
    borderColor: Color;
    edge: number;

    colorSetters();
    constructor(edge?: any, border?: any, borderColor?: any);
    developersMenu();
    init(edge?: number, border?: number, borderColor?: Color);
    numericalSetters();
    outlinePath(ctx?: CanvasRenderingContext2D, corner?: number, inset?: number);
    render(ctx?: CanvasRenderingContext2D);
    setBorderColor(color?: any);
    setBorderWidth(size?: any);
    setCornerSize(size?: any);
}

export class CamSnapshotDialogMorph extends DialogBoxMorph {
    accept: any;
    ide: any;
    labelString: any;
    oncancel: any;
    padding: any;
    sprite: any;
    videoElement: any;
    videoView: any;

    buildContents();
    close();
    constructor(ide?: any, sprite?: any, onCancel?: any, onAccept?: any);
    destroy();
    disable();
    init(ide?: any, sprite?: any, onCancel?: any, onAccept?: any);
    ok();
}

export class CellMorph extends BoxMorph {
    color: Color;
    contents: number;
    idx: any;
    isBig: boolean;
    isEditable: boolean;
    parentCell: any;
    version: any;

    big();
    constructor(contents?: any, color?: any, idx?: any, parentCell?: any);
    createContents();
    drawShadow(context?: CanvasRenderingContext2D, radius?: number, inset?: number);
    fixLayout(justMe?: boolean);
    init(contents?: string, color?: Color, idx?: any, parentCell?: any);
    isCircular(list?: any);
    layoutChanged();
    mouseClickLeft(pos?: any);
    mouseDoubleClick(pos?: any);
    normal();
    reactToEdit(textMorph?: any);
    render(ctx?: CanvasRenderingContext2D);
    update();
}

export class CircleBoxMorph extends Morph {
    autoOrient: boolean;
    orientation: string;

    autoOrientation();
    constructor(orientation?: any);
    developersMenu();
    init(orientation?: string);
    render(ctx?: CanvasRenderingContext2D);
    toggleOrientation();
}

export class Cloud extends SnapType {
    apiBasePath: any;
    disabled: any;
    url: any;
    username: any;

    addEditorToCollection(collectionUsername?: any, collectionName?: any, editorUsername?: any, onSuccess?: any, onError?: any);
    addProjectToCollection(collectionUsername?: any, collectionName?: any, projectUsername?: any, projectName?: any, onSuccess?: any, onError?: any);
    changePassword(password?: any, newPassword?: any, passwordRepeat?: any, onSuccess?: any, onError?: any);
    checkCredentials(onSuccess?: any, onError?: any, response?: any);
    constructor();
    deleteCollection(collectionUsername?: any, collectionName?: any, onSuccess?: any, onError?: any);
    deleteProject(projectName?: any, username?: any, onSuccess?: any, onError?: any);
    determineCloudDomain();
    disable();
    encodeDict(dict?: any);
    genericError();
    getCollectionMetadata(collectionUsername?: any, collectionName?: any, onSuccess?: any, onError?: any);
    getCollectionProjects(collectionUsername?: any, page?: any, pageSize?: any, collectionName?: any, onSuccess?: any, onError?: any, withThumbnail?: any);
    getCollections(page?: any, pageSize?: any, searchTerm?: any, onSuccess?: any, onError?: any);
    getCollectionsContainingProject(username?: any, projectName?: any, page?: any, pageSize?: any, onSuccess?: any, onError?: any);
    getCurrentUser(onSuccess?: any, onError?: any);
    getProject(projectName?: any, delta?: any, onSuccess?: any, onError?: any);
    getProjectList(onSuccess?: any, onError?: any, withThumbnail?: any);
    getProjectMetadata(projectName?: any, username?: any, onSuccess?: any, onError?: any);
    getProjectVersionMetadata(projectName?: any, onSuccess?: any, onError?: any);
    getPublicProject(projectName?: any, username?: any, onSuccess?: any, onError?: any);
    getPublishedProjectList(username?: any, page?: any, pageSize?: any, searchTerm?: any, onSuccess?: any, onError?: any, withThumbnail?: any);
    getRemixes(username?: any, projectName?: any, page?: any, pageSize?: any, onSuccess?: any, onError?: any);
    getThumbnail(username?: any, projectName?: any, onSuccess?: any, onError?: any);
    getUser(username?: any, onSuccess?: any, onError?: any);
    getUserCollections(collectionUsername?: any, page?: any, pageSize?: any, searchTerm?: any, onSuccess?: any, onError?: any);
    init();
    initSession(onSuccess?: any);
    login(username?: any, password?: any, persist?: any, onSuccess?: any, onError?: any);
    logout(onSuccess?: any, onError?: any);
    newCollection(collectionName?: any, onSuccess?: any, onError?: any);
    parseDict(src?: any);
    publishCollection(collectionUsername?: any, collectionName?: any, onSuccess?: any, onError?: any);
    publishProject(projectName?: any, username?: any, onSuccess?: any, onError?: any);
    removeEditorFromCollection(collectionUsername?: any, collectionName?: any, editorUsername?: any, onSuccess?: any, onError?: any);
    removeProjectFromCollection(collectionUsername?: any, collectionName?: any, projectId?: any, onSuccess?: any, onError?: any);
    request(method?: any, path?: any, onSuccess?: any, onError?: any, errorMsg?: any, wantsRawResponse?: any, body?: any);
    resendVerification(username?: any, onSuccess?: any, onError?: any);
    resetPassword(username?: any, onSuccess?: any, onError?: any);
    saveProject(projectName?: any, body?: any, onSuccess?: any, onError?: any);
    setCollectionThumbnail(collectionUsername?: any, collectionName?: any, thumbnailId?: any, onSuccess?: any, onError?: any);
    shareCollection(collectionUsername?: any, collectionName?: any, onSuccess?: any, onError?: any);
    shareProject(projectName?: any, username?: any, onSuccess?: any, onError?: any);
    showProjectPath(username?: any, projectname?: any);
    signup(username?: any, password?: any, passwordRepeat?: any, email?: any, onSuccess?: any, onError?: any);
    unpublishCollection(collectionUsername?: any, collectionName?: any, onSuccess?: any, onError?: any);
    unpublishProject(projectName?: any, username?: any, onSuccess?: any, onError?: any);
    unshareCollection(collectionUsername?: any, collectionName?: any, onSuccess?: any, onError?: any);
    unshareProject(projectName?: any, username?: any, onSuccess?: any, onError?: any);
    updateCollectionDescription(collectionUsername?: any, collectionName?: any, description?: any, onSuccess?: any, onError?: any);
    updateCollectionName(collectionUsername?: any, collectionName?: any, newName?: any, onSuccess?: any, onError?: any);
    updateNotes(projectName?: any, notes?: any, onSuccess?: any, onError?: any);
    updateProjectName(projectName?: any, newName?: any, onSuccess?: any, onError?: any);
    withCredentialsRequest(method?: any, path?: any, onSuccess?: any, onError?: any, errorMsg?: any, wantsRawResponse?: any, body?: any);
}

export class Color extends SnapType {
    a: any;
    b: any;
    g: any;
    r: any;

    constructor(r?: any, g?: any, b?: any, a?: any);
    copy();
    dansDarker();
    darker(percent?: number | string);
    eq(aColor?: Color, observeAlpha?: any);
    hsl();
    hsv();
    inverted();
    isCloseTo(aColor?: any, observeAlpha?: any, tolerance?: any);
    lighter(percent?: number);
    mixed(proportion?: number, otherColor?: Color);
    set_hsl(h?: any, s?: any, l?: any);
    set_hsv(h?: any, s?: any, v?: any);
    solid();
    toRGBstring();
    toString();
}

export class ColorPaletteMorph extends Morph {
    choice: Color;
    isCachingImage: boolean;
    target: any;
    targetSetter: string;

    constructor(target?: any, sizePoint?: any);
    developersMenu();
    init(target?: any, size?: Point);
    mouseDownLeft(pos?: any);
    mouseMove(pos?: any);
    render(ctx?: CanvasRenderingContext2D);
    setTarget();
    setTargetSetter();
    updateTarget();
}

export class ColorPickerMorph extends Morph {
    choice: any;
    color: any;

    constructor(defaultColor?: any);
    fixLayout();
    getChoice();
    init(defaultColor?: any);
    rootForGrab();
}

export class ColorSlotMorph extends ArgMorph {
    alpha: number;

    constructor(clr?: any);
    drawRectBorder(ctx?: CanvasRenderingContext2D);
    evaluate();
    fixLayout();
    getSpec();
    getUserColor();
    init(clr?: any);
    mouseClickLeft();
    render(ctx?: CanvasRenderingContext2D);
    toXML(serializer?: SnapSerializer);
}

export class CommandBlockMorph extends BlockMorph {
    exitTag: any;
    partOfCustomCommand: boolean;

    allAttachTargets(newParent?: ScriptsMorph);
    attachTargets();
    blockSequence();
    bottomAttachPoint();
    bottomBlock();
    closestAttachTarget(newParent?: ScriptsMorph);
    constructor();
    dentCenter();
    dentLeft();
    drawBottomDentEdge(ctx?: CanvasRenderingContext2D, x?: number, y?: number);
    drawBottomRightEdge(ctx?: CanvasRenderingContext2D);
    drawEdges(ctx?: CanvasRenderingContext2D);
    drawFlatBottomDentEdge(ctx?: any);
    drawLeftEdge(ctx?: CanvasRenderingContext2D);
    drawRightEdge(ctx?: CanvasRenderingContext2D);
    drawTopDentEdge(ctx?: CanvasRenderingContext2D, x?: number, y?: number);
    drawTopLeftEdge(ctx?: CanvasRenderingContext2D);
    extract();
    init();
    isStop();
    nextBlock(block?: any);
    outlinePath(ctx?: CanvasRenderingContext2D, inset?: number);
    prepareToBeGrabbed(handMorph?: HandMorph);
    snap(hand?: HandMorph);
    topAttachPoint();
    userDestroy();
    userDestroyJustThis();
    userExtractJustThis();
    wrapAttachPoint();
}

export class CommandSlotMorph extends ArgMorph {
    color: Color;

    attach();
    attachTargets();
    constructor();
    dentCenter();
    dentLeft();
    drawEdges(ctx?: CanvasRenderingContext2D);
    drawFlat(ctx?: any);
    evaluate();
    fixLayout();
    getSpec();
    init();
    isEmptySlot();
    nestedBlock(block?: any);
    render(ctx?: any);
    slotAttachPoint();
    toXML(serializer?: any);
    topBlock();
    unwind();
}

export class CommentMorph extends BoxMorph {
    anchor: Morph;
    arrow: ArrowMorph;
    block: CommandBlockMorph;
    color: Color;
    contents: TextMorph;
    handle: HandleMorph;
    isCollapsed: boolean;
    isDraggable: boolean;
    stickyOffset: any;
    title: any;
    titleBar: BoxMorph;

    align(topBlock?: any, ignoreLayer?: any);
    comeToFront();
    constructor(contents?: any);
    destroy();
    fixLayout();
    fullCopy();
    hide();
    init(contents?: any);
    justDropped(hand?: any);
    layoutChanged();
    mouseClickLeft();
    prepareToBeGrabbed(hand?: any);
    reactToEdit();
    refreshScale();
    selectForEdit();
    setTextWidth(pixels?: any);
    show();
    snap(hand?: any);
    stackHeight();
    startFollowing(topBlock?: any, world?: any);
    stopFollowing();
    text();
    textWidth();
    toXML(serializer?: SnapSerializer);
    toggleExpand();
    userDestroy();
    userMenu();
}

export class Context extends SnapType {
    accumulator: any;
    activeAudio: any;
    activeNote: any;
    activeSends: any;
    comment: any;
    emptySlots: any;
    expression: any;
    inputs: any;
    isContinuation: any;
    isCustomBlock: any;
    isCustomCommand: any;
    isFlashing: any;
    origin: any;
    outerContext: any;
    parentContext: any;
    pc: any;
    receiver: any;
    startTime: any;
    tag: any;
    variables: any;
    version: any;

    addInput(input?: List | number);
    changed();
    components();
    constructor(parentContext?: any, expression?: any, outerContext?: any, receiver?: any);
    continuation(isReporter?: any);
    copyForContinuation();
    copyForContinuationCall();
    copyWithInputs(inputs?: any);
    copyWithNext(next?: any);
    emptyOrEqual(list1?: any, list2?: any);
    equalTo(other?: any);
    image();
    isInCustomBlock();
    lastFlashable();
    prepareContinuationForBinding();
    rawContinuation(isReporter?: any);
    stackSize();
    stopMusic();
    toBlock();
    toString();
    toUserBlock();
    toXML(serializer?: any);
    updateEmptySlots();
}

export class Costume extends SnapType {
    contents: any;
    embeddedData: any;
    loaded: any;
    name: any;
    rotationCenter: any;
    version: any;

    boundingBox();
    bounds();
    canvasBoundingBox(pic?: any);
    center();
    constructor(canvas?: any, name?: any, rotationCenter?: any, noFit?: any, maxExtent?: any);
    copy();
    edit(aWorld?: any, anIDE?: any, isnew?: any, oncancel?: any, onsubmit?: any);
    editRotationPointOnly(aWorld?: any, anIDE?: any);
    extent();
    flipped();
    height();
    isTainted();
    maxExtent();
    pixels();
    pngData();
    rasterized();
    shrinkToFit(extentPoint?: any);
    shrinkWrap();
    stretched(w?: any, h?: any);
    thumbnail(extentPoint?: any, recycleMe?: any, noPadding?: any);
    toString();
    toXML(serializer?: any);
    width();
}

export class CostumeEditorMorph extends Morph {
    costume: any;
    margin: any;
    rotationCenter: any;

    accept();
    constructor(costume?: any);
    createTexture();
    fixLayout();
    init(costume?: any);
    mouseDownLeft(pos?: any);
    mouseMove(pos?: any);
    render(ctx?: any);
}

export class CostumeIconMorph extends ToggleButtonMorph {
    corner: any;
    fps: any;
    isDraggable: any;
    object: any;
    padding: any;
    thumbnail: any;
    version: any;

    constructor(aCostume?: any);
    createLabel();
    createThumbnail();
    disinherit();
    duplicateCostume();
    editCostume();
    editRotationPointOnly();
    exportCostume();
    fixLayout();
    importEmbeddedData();
    init(aCostume?: any);
    prepareToBeGrabbed();
    query();
    removeCostume();
    renameCostume();
    render(ctx?: any);
    step();
    typeOfStringData(aString?: any);
    userMenu();
}

export class Crosshair extends VectorShape {
    center: any;
    image: any;
    isCrosshair: any;
    paper: any;

    constructor(center?: any, paper?: any);
    drawOn(aCanvasMorph?: any);
    init(center?: any, paper?: any);
    moveBy(delta?: any);
    update(newPosition?: any);
}

export class CSlotMorph extends CommandSlotMorph {
    color: Color;
    isLambda: boolean;
    isLoop: boolean;

    constructor();
    drawBottomEdge(ctx?: any);
    drawRightEdge(ctx?: any);
    drawTopEdge(ctx?: any, x?: any, y?: any);
    drawTopLeftEdge(ctx?: any);
    drawTopRightEdge(ctx?: any);
    elementsAtLOC(definitions?: any);
    fixHolesLayout();
    fixLayout();
    fixLoopLayout();
    getSpec();
    init();
    isLocked();
    loop();
    mappedCode(definitions?: any);
    outlinePath(ctx?: any, inset?: any, offset?: any);
    render(ctx?: any);
}

export class CursorMorph extends BlinkerMorph {
    keyDownEventUsed: boolean;
    originalAlignment: string;
    originalContents: string;
    slot: number;
    target: Morph;
    textarea: HTMLTextAreaElement;

    accept();
    cancel();
    constructor(aStringOrTextMorph?: any, aTextarea?: any);
    destroy();
    gotoPos(aPoint?: Point);
    gotoSlot(slot?: number);
    init(aStringOrTextMorph?: Morph, aTextarea?: HTMLTextAreaElement);
    processInput(event?: InputEvent);
    processKeyDown(event?: KeyboardEvent);
    processKeyUp(event?: KeyboardEvent);
    syncTextareaSelectionWith(targetMorph?: Morph);
    undo();
    updateSelection(shift?: any);
    updateTextAreaPosition();
}

export class CustomBlockDefinition extends SnapType {
    body: any;
    cachedIsRecursive: any;
    cachedTranslation: any;
    category: any;
    codeHeader: any;
    codeMapping: any;
    comment: any;
    declarations: any;
    editorDimensions: any;
    guid: any;
    isGlobal: any;
    isHelper: any;
    receiver: any;
    scripts: any;
    spec: any;
    storedSemanticSpec: any;
    translations: any;
    type: any;
    variableNames: any;

    abstractBlockSpec();
    addInputs(count?: any);
    blockInstance(storeTranslations?: any);
    blockSpec();
    collectDependencies(excluding?: any, result?: any, localReceiver?: any);
    constructor(spec?: any, receiver?: any);
    copyAndBindTo(sprite?: any, headerOnly?: any);
    dataDependencies();
    decodeChoices(choices?: any);
    defaultValueOf(inputName?: any);
    defaultValueOfInputIdx(idx?: any);
    dropDownMenuOf(inputName?: any);
    dropDownMenuOfInputIdx(idx?: any);
    encodeChoices(list?: any);
    gensym(existing?: any);
    helpSpec();
    inputNames();
    inputOptionsOf(inputName?: any);
    inputOptionsOfIdx(idx?: any);
    isDirectlyRecursive();
    isIrreplaceableInput(inputName?: any);
    isIrreplaceableInputIdx(idx?: any);
    isReadOnlyInput(inputName?: any);
    isReadOnlyInputIdx(idx?: any);
    isSending(message?: any, receiverName?: any);
    localizedSpec();
    menuSearchWords();
    parseChoices(string?: any);
    parseSpec(spec?: any);
    prototypeInstance();
    purgeCorpses();
    removeInputs(count?: any);
    scriptsModel();
    scriptsPicture();
    separatorOfInput(inputName?: any);
    separatorOfInputIdx(idx?: any);
    setBlockDefinition(aContext?: any);
    setBlockLabel(abstractSpec?: any);
    sortedElements();
    templateInstance();
    toXML(serializer?: any);
    translationsAsText();
    typeOf(inputName?: any);
    updateTranslations(text?: any);
}

export class CustomCommandBlockMorph extends CommandBlockMorph {
    category: any;
    definition: any;
    isGlobal: any;
    isPrototype: any;
    isTemplate: any;
    selector: any;
    semanticSpec: any;
    storedTranslations: any;
    variables: any;

    alternatives();
    attachTargets();
    blockSpecFromFragments();
    constructor(definition?: any, isProto?: any);
    declarationsFromFragments();
    deleteBlockDefinition();
    duplicateBlockDefinition();
    edit();
    exportBlockDefinition();
    getDefinitionJSON(definition?: any);
    init(definition?: any, isProto?: any);
    initializeVariables(oldVars?: any);
    inputFragmentNames();
    isInUse();
    labelPart(spec?: any);
    mouseClickLeft();
    parseSpec(spec?: any);
    placeHolder();
    reactToTemplateCopy();
    refresh(aDefinition?: any);
    refreshDefaults(definition?: any);
    refreshPrototype();
    refreshPrototypeSlotTypes();
    relabel(alternatives?: any);
    restoreInputs(oldInputs?: any);
    specFromFragments();
    toBlockXML(serializer?: any);
    upvarFragmentName(idx?: any);
    upvarFragmentNames();
    userMenu();
}

export class CustomReporterBlockMorph extends ReporterBlockMorph {
    category: any;
    definition: any;
    isGlobal: any;
    isPrototype: any;
    isTemplate: any;
    selector: any;
    semanticSpec: any;
    storedTranslations: any;
    variables: any;

    alternatives();
    blockSpecFromFragments();
    constructor(definition?: any, isPredicate?: any, isProto?: any);
    declarationsFromFragments();
    deleteBlockDefinition();
    duplicateBlockDefinition();
    edit();
    exportBlockDefinition();
    init(definition?: any, isPredicate?: any, isProto?: any);
    initializeVariables(oldVars?: any);
    inputFragmentNames();
    isInUse();
    labelPart(spec?: any);
    mouseClickLeft();
    parseSpec(spec?: any);
    placeHolder();
    reactToTemplateCopy();
    refresh(aDefinition?: any);
    refreshDefaults(definition?: any);
    refreshPrototype();
    refreshPrototypeSlotTypes();
    relabel(alternatives?: any);
    restoreInputs(oldInputs?: any);
    specFromFragments();
    toBlockXML(serializer?: any);
    upvarFragmentName(idx?: any);
    upvarFragmentNames();
    userMenu();
}

export class DialMorph extends Morph {
    action: any;
    color: any;
    fillColor: any;
    max: any;
    min: any;
    target: any;
    tick: any;
    value: any;

    constructor(min?: any, max?: any, value?: any, tick?: any, radius?: any);
    developersMenu();
    getValueOf(point?: any);
    init(min?: any, max?: any, value?: any, tick?: any, radius?: any);
    mouseDownLeft(pos?: any);
    render(ctx?: any);
    setExtent(aPoint?: any);
    setRadius(radius?: any);
    setTarget();
    setTargetSetter();
    setValue(value?: any, snapToTick?: any, noUpdate?: any);
    updateTarget();
}

export class DialogBoxMorph extends Morph {
    action: Function;
    body: InputFieldMorph;
    buttons: AlignmentMorph;
    color: Color;
    environment: SpriteMorph;
    fullShadowSource: boolean;
    head: any;
    is3D: boolean;
    isDraggable: boolean;
    key: string;
    label: StringMorph;
    labelString: string;
    nag: boolean;
    noDropShadow: boolean;
    target: any;

    accept();
    addBody(aMorph?: InputFieldMorph);
    addButton(action?: string, label?: string);
    addHead(aMorph?: any);
    askYesNo(title?: any, textString?: any, world?: any, pic?: any);
    cancel();
    constructor(target?: any, action?: any, environment?: any);
    createButtons();
    createLabel();
    destroy();
    edit();
    fixLayout();
    getInput();
    inform(title?: any, textString?: any, world?: any, pic?: any);
    init(target?: any, action?: Function, environment?: SpriteMorph);
    justDropped(hand?: any);
    normalizeSpaces(string?: string);
    ok();
    outlinePathBody(ctx?: CanvasRenderingContext2D, radius?: number);
    outlinePathTitle(ctx?: CanvasRenderingContext2D, radius?: number);
    popUp(world?: WorldMorph);
    processKeyDown(event?: any);
    processKeyPress();
    prompt(title?: string, defaultString?: any, world?: WorldMorph, pic?: any, choices?: any, isReadOnly?: any, isNumeric?: any, sliderMin?: any, sliderMax?: any, sliderAction?: any, decimals?: any);
    promptCategory(title?: any, name?: any, color?: any, world?: any, pic?: any, msg?: any);
    promptCode(title?: any, defaultString?: any, world?: any, pic?: any, instructions?: any);
    promptCredentials(title?: any, purpose?: any, tosURL?: any, tosLabel?: any, prvURL?: any, prvLabel?: any, checkBoxLabel?: any, world?: any, pic?: any, msg?: any);
    promptRGB(title?: any, color?: any, world?: any, pic?: any, msg?: any);
    promptVector(title?: any, point?: any, deflt?: any, xLabel?: any, yLabel?: any, world?: any, pic?: any, msg?: any);
    render(ctx?: CanvasRenderingContext2D);
    setPicture(aMorphOrCanvas?: any);
    withKey(key?: any);
}

export class FrameMorph extends Morph {
    acceptsDrops: boolean;
    alpha: number;
    color: Color;
    isDraggable: boolean;
    scrollFrame: ScrollFrameMorph;

    adjustBounds();
    constructor(aScrollFrame?: any);
    developersMenu();
    fullBounds();
    fullDrawOn(ctx?: CanvasRenderingContext2D, aRect?: Rectangle);
    fullImage();
    init(aScrollFrame?: ScrollFrameMorph);
    keepAllSubmorphsWithin();
    keepInScrollFrame();
    reactToDropOf();
    reactToGrabOf();
    submorphBounds();
    topMorphAt(point?: Point);
}

export class FunctionSlotMorph extends ArgMorph {
    color: Color;
    isPredicate: boolean;

    constructor(isPredicate?: any);
    drawDiamond(ctx?: any);
    drawRounded(ctx?: any);
    getSpec();
    init(isPredicate?: boolean);
    render(ctx?: any);
    toXML(serializer?: any);
}

export class GrayPaletteMorph extends ColorPaletteMorph {
    choice: any;
    isCachingImage: any;
    target: any;
    targetSetter: any;

    constructor(target?: any, sizePoint?: any);
    render(ctx?: any);
}

export class HandleMorph extends Morph {
    color: Color;
    inset: Point;
    isDraggable: boolean;
    isHighlighted: boolean;
    minExtent: Point;
    target: TextMorph;
    type: string;

    attach();
    constructor(target?: any, minX?: any, minY?: any, insetX?: any, insetY?: any, type?: any);
    fixLayout();
    init(target?: TextMorph, minX?: number, minY?: number, insetX?: number, insetY?: number, type?: any);
    mouseDownLeft(pos?: any);
    mouseEnter();
    mouseLeave();
    render(ctx?: any);
    renderCrosshairsOn(ctx?: any, fract?: any);
    renderHandleOn(ctx?: any, color?: any, shadowColor?: any);
    rootForGrab();
}

export class HandMorph extends Morph {
    bounds: any;
    cachedFullBounds: any;
    cachedFullImage: any;
    contextMenuEnabled: any;
    grabOrigin: any;
    grabPosition: any;
    morphToGrab: any;
    mouseButton: any;
    mouseOverBounds: any;
    mouseOverList: any;
    temporaries: any;
    touchHoldTimeout: any;
    touchStartPosition: any;
    world: any;

    allMorphsAtPointer();
    changed();
    constructor(aWorld?: any);
    destroyTemporaries();
    drop();
    dropTargetFor(aMorph?: Morph);
    fullChanged();
    fullDrawOn(ctx?: CanvasRenderingContext2D, rect?: Rectangle);
    grab(aMorph?: Morph);
    init(aWorld?: any);
    morphAtPointer();
    moveBy(delta?: Point);
    processDoubleClick();
    processDrop(event?: any);
    processMouseDown(event?: MouseEvent);
    processMouseMove(event?: MouseEvent);
    processMouseScroll(event?: any);
    processMouseUp();
    processTouchEnd(event?: any);
    processTouchMove(event?: any);
    processTouchStart(event?: any);
}

export class HatBlockMorph extends CommandBlockMorph {

    blockSequence();
    constructor();
    drawLeftEdge(ctx?: any);
    drawRightEdge(ctx?: any);
    drawTopDentEdge();
    drawTopLeftEdge(ctx?: any);
    init();
    outlinePath(ctx?: any, inset?: any);
    reify();
}

export class IDE_Morph extends Morph {
    bulkDropInProgress: boolean;
    cachedSceneFlag: any;
    categories: Morph;
    cloud: Cloud;
    cloudMsg: any;
    color: Color;
    config: Object;
    controlBar: Morph;
    corral: Morph;
    corralBar: Morph;
    currentCategory: string;
    currentSprite: Morph;
    currentTab: string;
    embedOverlay: any;
    embedPlayButton: any;
    filePicker: any;
    globalVariables: VariableFrame;
    hasChangedMedia: boolean;
    isAddingNextScene: boolean;
    isAddingScenes: boolean;
    isAnimating: boolean;
    isAppMode: boolean;
    isAutoFill: boolean;
    isEmbedMode: boolean;
    isImportingLocalFile: boolean;
    isSmallStage: boolean;
    loadNewProject: boolean;
    logo: Morph;
    palette: ScrollFrameMorph;
    paletteHandle: PaletteHandleMorph;
    paletteWidth: number;
    projectGUID: string;
    savingPreferences: boolean;
    scene: Scene;
    scenes: List;
    serializer: SnapSerializer;
    shield: any;
    source: any;
    spriteBar: Morph;
    spriteEditor: ScrollFrameMorph;
    sprites: List;
    stage: StageMorph;
    stageHandle: StageHandleMorph;
    stageRatio: number;
    userLanguage: any;
    version: number;
    wasSingleStepping: boolean;

    aboutSnap();
    addMessageListener(message?: any, callback?: any);
    addMessageListenerForAll(callback?: any);
    addNewSprite();
    addPaletteCategory(name?: any, color?: any);
    addScene();
    addToPuzzle();
    applyConfigurations();
    applyPaneHidingConfigurations();
    applySavedSettings();
    autoLoadExtensions();
    availableBackup(anyway?: any);
    backup(callback?: any);
    backupAndDo(callback?: any);
    beginBulkDrop();
    blocksLibraryXML(definitions?: any, moreCategories?: any, asFile?: any, dataFrame?: any, localData?: any);
    broadcast(message?: any, callback?: any, payload?: any);
    buildPanes();
    buildProjectRequest();
    changeCloudPassword();
    clearBackup();
    cloudAcknowledge();
    cloudError();
    cloudIcon(height?: any, color?: any);
    cloudMenu();
    cloudResponse();
    confirm(message?: any, title?: any, action?: any);
    constructor(config?: any);
    createCategories();
    createCloudAccount();
    createControlBar();
    createCorral(keepSceneAlbum?: boolean);
    createCorralBar();
    createLogo();
    createNewCategory();
    createNewProject();
    createNewScene();
    createPalette(forSearching?: any);
    createPaletteHandle();
    createSpriteBar();
    createSpriteEditor();
    createStage();
    createStageHandle();
    defaultDesign();
    deletePaletteCategory(name?: any);
    deleteUserCategory(pos?: any);
    deserializeScriptString(str?: any);
    deserializeSpritesString(str?: any);
    droppedAudio(anAudio?: any, name?: any);
    droppedBinary(anArrayBuffer?: any, name?: any);
    droppedImage(aCanvas?: any, name?: any, embeddedData?: any, src?: any);
    droppedSVG(anImage?: any, name?: any);
    droppedText(aString?: any, name?: any, fileType?: any);
    duplicateSprite(sprite?: SpriteMorph);
    editNotes();
    endBulkDrop();
    exportGlobalBlocks();
    exportProject(name?: any);
    exportProjectAsCloudData(name?: any);
    exportProjectMedia(name?: any);
    exportProjectNoMedia(name?: any);
    exportProjectSummary(useDropShadows?: any);
    exportScriptsPicture();
    exportSprite(sprite?: any);
    fixLayout(situation?: string);
    flashSpriteScripts(fromLOC?: any, toLOC?: any, name?: any);
    flatDesign();
    flushBlocksCache(category?: string);
    flushPaletteCache(category?: string);
    generatePuzzle();
    getCurrentScene();
    getMediaList(dirname?: any, callback?: any);
    getMessages();
    getProject();
    getProjectName();
    getProjectNotes();
    getProjectXML();
    getScenes();
    getSetting(key?: any);
    getSpriteScriptsXML(name?: any);
    getURL(url?: any, callback?: any, responseType?: any);
    getVar(name?: any);
    getVarNames();
    hasCloudProject();
    hasLocalStorage();
    hasUnsavedEdits();
    importLocalFile();
    importMedia(folderName?: any);
    inform(title?: any, message?: any);
    init(config?: any);
    initializeCloud();
    instantiateSprite(sprite?: any);
    isIE();
    isPaused();
    isRunning();
    languageMenu();
    loadProjectXML(projectXML?: any);
    loadSVG(anImage?: any, name?: any);
    loadSpriteScriptsXML(scriptsXML?: any);
    logout();
    makeSureRecordingIsMono(sound?: any);
    microphoneMenu();
    newCamSprite();
    newList(array?: any);
    newName(name?: string, elements?: any[]);
    newProject();
    newSceneName(name?: any, ignoredScene?: any);
    newSoundName(name?: any);
    newSpriteName(name?: string, ignoredSprite?: any);
    openBlocksString(str?: any, name?: any, silently?: any);
    openCloudDataString(str?: any);
    openDataString(str?: any, name?: any, type?: any);
    openIn(world?: any);
    openMediaString(str?: any);
    openProject(project?: any);
    openProjectName(name?: any);
    openProjectString(str?: any, callback?: any);
    openProjectsBrowser();
    openScriptString(str?: any);
    openScriptsOnlyString(str?: any);
    openSpritesString(str?: any);
    paintNewSprite();
    paletteXML(categoryNames?: any);
    parseResourceFile(text?: any);
    popupMediaImportDialog(folderName?: any, items?: any);
    pressStart();
    projectMenu();
    prompt(message?: any, callback?: any, choices?: any, key?: any);
    rawOpenBlocksString(str?: any, name?: any, silently?: any);
    rawOpenCloudDataString(str?: any);
    rawOpenDataString(str?: any, name?: any, type?: any);
    rawOpenProjectString(str?: any);
    rawOpenScriptString(str?: any, silently?: any);
    rawOpenScriptsOnlyString(str?: any);
    rawOpenSpritesString(str?: any);
    reactToWorldResize(rect?: any);
    recordNewSound();
    recordSavedChanges();
    recordUnsavedChanges(spriteName?: string, details?: any[]);
    reflectLanguage(lang?: any, callback?: any, noSave?: any);
    refreshIDE();
    refreshPalette(shouldIgnorePosition?: boolean);
    removeBlock(aBlock?: any, justThis?: any);
    removeSetting(key?: any);
    removeSprite(sprite?: SpriteMorph, enableUndelete?: any);
    removeUnusedBlocks();
    render(ctx?: CanvasRenderingContext2D);
    resendVerification();
    resetCloudPassword();
    resourceURL();
    restore();
    runScripts();
    save();
    saveAudioAs(audio?: any, fileName?: any);
    saveCanvasAs(canvas?: any, fileName?: any);
    saveFileAs(contents?: any, fileType?: any, fileName?: any);
    saveProjectToCloud(name?: any);
    saveProjectsBrowser();
    saveSetting(key?: any, value?: any);
    saveXMLAs(xml?: any, fileName?: any);
    scenesMenu();
    scriptsTexture();
    scrollPaletteToCategory(category?: any);
    selectSprite(sprite?: SpriteMorph, noEmptyRefresh?: any);
    setBlockTransparency(num?: any, save?: any);
    setBlocksScale(num?: any);
    setCloudURL();
    setDefaultDesign();
    setEmbedMode();
    setExtent(point?: any);
    setFlatDesign();
    setLanguage(lang?: any, callback?: any, noSave?: any);
    setPaletteWidth(newWidth?: any);
    setProjectName(string?: any);
    setProjectNotes(string?: any);
    setStageExtent(aPoint?: any);
    setTranslation(countryCode?: any, callback?: any);
    setUnifiedPalette(bool?: any);
    setVar(name?: any, value?: any);
    settingsMenu();
    showMessage(message?: string, secs?: any);
    snapMenu();
    spriteNamed(name?: any);
    startFastTracking();
    stop();
    stopAllScripts();
    stopFastTracking();
    switchTo(sceneName?: any);
    switchToDevMode();
    switchToScene(scene?: any, refreshAlbum?: any, msg?: any, data?: any, pauseHats?: any);
    switchToUserMode();
    toggleAppMode(appMode?: any);
    toggleBlurredShadows();
    toggleCameraSupport();
    toggleCategoryNames();
    toggleDynamicInputLabels();
    toggleFastTracking();
    toggleInputSliders();
    toggleLongFormInputDialog();
    togglePaletteButtons();
    togglePauseResume();
    togglePlainPrototypeLabels();
    togglePreferEmptySlotDrops();
    toggleRetina();
    toggleSingleStepping();
    toggleSliderExecute();
    toggleStageSize(isSmall?: any, forcedRatio?: any);
    toggleUnifiedPalette();
    toggleZebraColoring();
    topVisibleCategoryInPalette();
    undelete(aSprite?: any, pos?: any);
    undeleteSprites(pos?: any);
    unflashSpriteScripts(name?: any);
    unsavedChanges();
    updateChanges(spriteName?: string, details?: any[]);
    urlParameters();
    userFadeBlocks();
    userMenu();
    userSetBlocksScale();
    userSetDragThreshold();
    userSetStageSize();
    verifyProject(body?: any);
    warnAboutDev();
    warnAboutIE();
}

export class InputFieldMorph extends Morph {
    choices: any;
    color: Color;
    isNumeric: boolean;
    isReadOnly: boolean;
    oldContentsExtent: Point;

    arrow();
    constructor(text?: any, isNumeric?: any, choiceDict?: any, isReadOnly?: any);
    contents();
    drawRectBorder(ctx?: CanvasRenderingContext2D);
    dropDownMenu();
    edit();
    fixLayout();
    getValue();
    init(text?: string, isNumeric?: boolean, choiceDict?: any, isReadOnly?: boolean);
    mouseClickLeft(pos?: any);
    normalizeSpaces(string?: string);
    render(ctx?: CanvasRenderingContext2D);
    setChoice(aStringOrFloat?: any);
    setContents(aStringOrFloat?: any);
    setIsNumeric(bool?: any);
}

export class InputSlotDialogMorph extends DialogBoxMorph {
    category: any;
    fragment: any;
    isExpanded: any;
    noDelete: any;
    slots: any;
    textfield: any;
    types: any;

    addBlockTypeButton(action?: any, element?: any, query?: any);
    addSlotArityButton(action?: any, label?: any, query?: any);
    addSlotTypeButton(label?: any, spec?: any);
    addSlotsMenu();
    addTypeButton(action?: any, label?: any, query?: any);
    constructor(fragment?: any, target?: any, action?: any, environment?: any, category?: any);
    createSlotTypeButtons();
    createTypeButtons();
    deleteFragment();
    editSeparator();
    editSlotOptions();
    extensionOptionsMenu();
    fixLayout();
    fixSlotsLayout();
    getInput();
    hide();
    init(fragment?: any, target?: any, action?: any, environment?: any, category?: any);
    open(title?: any, defaultString?: any, world?: any, pic?: any, noDeleteButton?: any);
    setSlotArity(arity?: any);
    setSlotOptions(text?: any);
    setSlotType(type?: any);
    setType(fragmentType?: any);
    show();
    specialOptionsMenu();
    specialSlotsMenu();
    symbolMenu();
}

export class InputSlotMorph extends ArgMorph {
    choices: Object | string;
    color: Color;
    constant: any[];
    isAlphanumeric: boolean;
    isNumeric: boolean;
    isReadOnly: boolean;
    isUnevaluated: boolean;
    minWidth: number;
    oldContentsExtent: Point;
    onSetContents: any;
    selectedBlock: any;
    symbol: any;

    arrow();
    attributesMenu(searching?: any);
    audioMenu(searching?: any);
    clonablesMenu(searching?: any);
    collidablesMenu(searching?: any);
    constructor(text?: any, isNumeric?: any, choiceDict?: any, isReadOnly?: any);
    contents();
    costumesMenu(searching?: any);
    directionDialMenu(searching?: any);
    distancesMenu(searching?: any);
    drawRectBorder(ctx?: CanvasRenderingContext2D);
    drawRoundBorder(ctx?: CanvasRenderingContext2D);
    dropDownMenu(enableKeyboard?: any);
    evaluate();
    eventsMenu(searching?: any);
    fixLayout();
    flash(aColor?: any);
    freshTextEdit(aStringOrTextMorph?: InputSlotStringMorph);
    getSpec();
    gettablesMenu();
    init(text?: any, isNumeric?: any, choiceDict?: Object | string, isReadOnly?: any);
    isEmptySlot();
    keysMenu();
    locationMenu(searching?: any);
    mapNumberToCode();
    mapStringToCode();
    mappedCode();
    menuFromDict(choices?: Object | string, noEmptyOption?: boolean, enableKeyboard?: any);
    messagesMenu(searching?: any);
    messagesReceivedMenu(searching?: any);
    mouseClickLeft(pos?: Point);
    mouseDownLeft(pos?: Point);
    objectsMenu(searching?: any, includeMyself?: any);
    objectsMenuWithSelf(searching?: any);
    pianoKeyboardMenu(searching?: any);
    primitivesMenu();
    reactToEdit();
    reactToKeystroke();
    receiversMenu(searching?: any);
    render(ctx?: CanvasRenderingContext2D);
    scenesMenu(searching?: any);
    setChoices(dict?: any, readonly?: any);
    setContents(data?: any[] | number | string);
    shadowedVariablesMenu(searching?: any);
    slotMenu();
    soundsMenu(searching?: any);
    toXML(serializer?: SnapSerializer);
    typesMenu();
    unflash();
    updateEventUpvar(data?: any[]);
    userEditMenu(searching?: any);
    userSetContents(aStringOrFloat?: any[]);
}

export class InputSlotStringMorph extends StringMorph {
    blanksColor: Color;
    color: Color;
    currentlySelecting: boolean;
    enableLinks: boolean;
    endMark: number;
    fontName: string;
    fontSize: number;
    fontStyle: string;
    isBold: boolean;
    isEditable: boolean;
    isItalic: boolean;
    isNumeric: boolean;
    isPassword: boolean;
    isScrollable: boolean;
    isShowingBlanks: boolean;
    markedBackgoundColor: Color;
    markedTextColor: Color;
    shadowColor: Color;
    shadowOffset: Point;
    startMark: number;
    text: string;

    constructor(text?: any, fontSize?: any, fontStyle?: any, bold?: any, italic?: any, isNumeric?: any, shadowOffset?: any, shadowColor?: any, color?: any, fontName?: any);
    getRenderColor();
    getShadowRenderColor();
}

export class InputSlotTextMorph extends StringMorph {
    alignment: any;
    backgroundColor: any;
    color: any;
    currentlySelecting: any;
    enableLinks: any;
    endMark: any;
    fontName: any;
    fontSize: any;
    fontStyle: any;
    isBold: any;
    isEditable: any;
    isItalic: any;
    isScrollable: any;
    lineSlots: any;
    lines: any;
    markedBackgoundColor: any;
    markedTextColor: any;
    maxLineWidth: any;
    maxWidth: any;
    receiver: any;
    shadowColor: any;
    shadowOffset: any;
    startMark: any;
    text: any;
    words: any;

    constructor(text?: any, fontSize?: any, fontStyle?: any, bold?: any, italic?: any, alignment?: any, width?: any, fontName?: any, shadowOffset?: any, shadowColor?: any);
    getRenderColor();
    getShadowRenderColor();
}

export class InspectorMorph extends BoxMorph {
    border: any;
    borderColor: any;
    buttonClose: any;
    buttonEdit: any;
    buttonInspect: any;
    buttonSubset: any;
    color: any;
    currentProperty: any;
    detail: any;
    edge: any;
    fps: any;
    hasUserEditedDetails: any;
    isDraggable: any;
    label: any;
    list: any;
    markOwnProperties: any;
    resizer: any;
    showing: any;
    target: any;
    work: any;

    addProperty();
    buildPanes();
    constructor(target?: any);
    fixLayout();
    init(target?: any);
    removeProperty();
    renameProperty();
    save();
    setTarget(target?: any);
    step();
    updateCurrentSelection();
    updateReferences(map?: any);
}

export class JaggedBlockMorph extends ReporterBlockMorph {
    minWidth: any;

    constructor(spec?: any);
    drawEdges(ctx?: any);
    init(spec?: any);
    outlinePath(ctx?: any, inset?: any);
}

export class JSCompiler extends SnapType {
    gensymArgIndexes: any;
    paramCount: any;
    params: any;
    process: any;
    scope: any;
    source: any;

    compileElseIf(multiArg?: any);
    compileExpression(block?: any);
    compileFunction();
    compileFunctionBody(aContext?: any, implicitParamCount?: any);
    compileInfix(operator?: any, inputs?: any);
    compileInput(inp?: any);
    compileInputs(array?: any);
    compileSequence(commandBlock?: any);
    constructor(aProcess?: any, outerScope?: any);
    escape(len?: any, i?: any);
    findEmptySlot(m?: any);
    functionHead();
    gensymForVar(varName?: any, argIndex?: any);
    getGensym(varName?: any);
    toString();
}

export class JukeboxMorph extends ScrollFrameMorph {
    acceptsDrops: any;
    soundsVersion: any;
    sprite: any;
    spriteVersion: any;

    constructor(aSprite?: any, sliderColor?: any);
    init(aSprite?: any, sliderColor?: any);
    reactToDropOf(icon?: any);
    removeSound(idx?: any);
    step();
    updateList();
    updateSelection();
    wantsDropOf(morph?: any);
}

export class LibraryImportDialogMorph extends DialogBoxMorph {
    action: any;
    handle: any;
    ide: any;
    isLoadingLibrary: any;
    key: any;
    labelString: any;
    librariesData: any;
    libraryCache: any;
    listField: any;
    notesField: any;
    notesText: any;
    originalCategories: any;
    palette: any;

    buildContents();
    cacheLibrary(key?: any, blocks?: any, palette?: any);
    cachedLibrary(key?: any);
    cachedPalette(key?: any);
    captureOriginalCategories();
    clearDetails();
    constructor(ide?: any, librariesData?: any);
    destroy();
    displayBlocks(libraryKey?: any);
    fixLayout();
    fixListFieldItemColors();
    hasCached(key?: any);
    importLibrary();
    init(ide?: any, librariesData?: any);
    initializeLibraryDescription();
    initializePalette();
    installLibrariesList();
    popUp();
    showMessage(msgText?: any);
}

export class List extends SnapType {
    contents: any;
    first: any;
    isLinked: any;
    lastChanged: any;
    rest: any;
    type: any;

    add(element?: any, index?: any);
    asArray();
    asCSV();
    asChunksOf(size?: any);
    asJSON();
    asTXT();
    asText();
    at(index?: any);
    becomeArray();
    becomeLinked();
    bind(key?: any, value?: any);
    blockify(limit?: any, count?: any);
    canBeCSV();
    canBeJSON();
    canBeTXT();
    cdr();
    changed();
    clear();
    colName(col?: any);
    cols();
    columnNames();
    columns();
    cons(car?: any, cdr?: any);
    constructor(array?: any);
    contains(element?: any);
    crossproduct();
    deepMap(callback?: any);
    distribution();
    equalTo(other?: any);
    flatten();
    folded(dimensions?: any);
    forget(key?: any);
    get(col?: any, row?: any);
    getDimension(rank?: any);
    hasOnlyAtomicData();
    indexOf(element?: any);
    isEmpty();
    isTable();
    items(indices?: any);
    itemsArray();
    length();
    lookup(key?: any);
    map(callback?: any);
    put(element?: any, index?: any);
    query(indices?: any);
    range(start?: any, end?: any);
    rangify(indices?: any);
    rank();
    ravel();
    remove(index?: any);
    reshape(dimensions?: any);
    reversed();
    rowName(row?: any);
    rows();
    shape();
    size();
    slice(indices?: any);
    strideTranspose();
    toString();
    toXML(serializer?: any, mediaContext?: any);
    transpose();
    version(startRow?: any, rows?: any, startCol?: any, cols?: any);
    width();
}

export class ListMorph extends ScrollFrameMorph {
    acceptsDrops: any;
    action: any;
    active: any;
    color: any;
    doubleClickAction: any;
    elements: any;
    format: any;
    labelGetter: any;
    listContents: any;
    selected: any;
    separator: any;
    verbatim: any;

    activateIndex(idx?: any);
    activeIndex();
    buildListContents();
    constructor(elements?: any, labelGetter?: any, format?: any, onDoubleClick?: any, separator?: any, verbatim?: any);
    init(elements?: any, labelGetter?: any, format?: any, onDoubleClick?: any, separator?: any, verbatim?: any);
    select(item?: any, trigger?: any);
    setExtent(aPoint?: any);
}

export class ListWatcherMorph extends BoxMorph {
    arrow: any;
    color: any;
    frame: any;
    handle: any;
    isDraggable: any;
    label: any;
    lastCell: any;
    lastUpdated: any;
    list: any;
    parentCell: any;
    plusButton: any;
    range: any;
    start: any;

    arrangeCells();
    constructor(list?: any, parentCell?: any);
    expand(maxExtent?: any);
    fixLayout();
    init(list?: any, parentCell?: any);
    mouseDoubleClick(pos?: any);
    render(ctx?: any);
    setStartIndex(index?: any);
    show();
    showTableView();
    startIndexMenu();
    update(anyway?: any);
    updateLength(notDone?: any);
    userMenu();
}

export class Localizer extends SnapType {
    dict: any;
    language: any;

    constructor(language?: any, dict?: any);
    contextualize(string?: any);
    credits();
    languageName(lang?: any);
    languages();
    translate(string?: any);
    unload();
}

export class MenuItemMorph extends TriggerMorph {
    action: any;
    color: Color;
    doubleClickAction: any;
    environment: InputSlotMorph;
    fontSize: number;
    fontStyle: string;
    highlightColor: Color;
    hint: any;
    label: TextMorph;
    labelBold: boolean;
    labelColor: Color;
    labelItalic: boolean;
    labelString: string;
    pressColor: Color;
    schedule: Animation;
    shortcut: TextMorph;
    shortcutString: string;
    target: any;
    userState: string;

    constructor(target?: any, action?: any, labelString?: any, fontSize?: any, fontStyle?: any, environment?: any, hint?: any, color?: any, bold?: any, italic?: any, doubleClickAction?: any, shortcut?: any);
    createIcon(source?: any);
    createLabel();
    createLabelPart(source?: string);
    createLabelString(string?: string);
    delaySubmenu();
    fixLayout();
    isListItem();
    isSelectedListItem();
    isShowingSubmenu();
    mouseClickLeft();
    mouseDownLeft(pos?: Point);
    mouseEnter();
    mouseLeave();
    mouseMove();
    popUpSubmenu();
}

export class MenuMorph extends BoxMorph {
    border: number;
    edge: number;
    environment: InputSlotMorph;
    fontSize: number;
    fullShadowSource: boolean;
    hasFocus: boolean;
    isDraggable: boolean;
    isListContents: boolean;
    items: any[];
    label: any;
    noDropShadow: boolean;
    selection: any;
    submenu: any;
    target: any;
    title: any;
    world: WorldMorph;

    addItem(labelString?: any[] | string, action?: Function | string | Morph, hint?: string, color?: any, bold?: any, italic?: any, doubleClickAction?: any, shortcut?: string, verbatim?: boolean);
    addLine(width?: any);
    addMenu(label?: string, aMenu?: MenuMorph, indicator?: any, verbatim?: boolean);
    addPair(label?: string, action?: MenuMorph, shortcut?: string, hint?: any, verbatim?: boolean);
    adjustWidths();
    closeRootMenu();
    closeSubmenu();
    constructor(target?: any, title?: any, environment?: any, fontSize?: any);
    createItems();
    createLabel();
    destroy();
    enterSubmenu();
    getFocus();
    init(target?: Function | Morph, title?: string, environment?: Morph, fontSize?: number);
    leaveSubmenu();
    maxWidth();
    popUpAtHand(world?: WorldMorph);
    popUpCenteredAtHand(world?: any);
    popUpCenteredInWorld(world?: WorldMorph);
    popup(world?: WorldMorph, pos?: Point);
    processKeyDown(event?: any);
    processKeyPress(event?: any);
    processKeyUp(event?: any);
    scroll();
    select(aMenuItem?: any);
    selectDown();
    selectFirst();
    selectUp();
    unselectAllItems();
}

export class Microphone extends SnapType {
    GOOD_ENOUGH_CORRELATION: any;
    analyser: any;
    audioContext: any;
    compiledModifier: any;
    compilerProcess: any;
    correlations: any;
    frequencies: any;
    isAutoStop: any;
    isReady: any;
    isStarted: any;
    lastTime: any;
    modifier: any;
    outChannels: any;
    output: any;
    pitch: any;
    processor: any;
    resolution: any;
    signals: any;
    sourceStream: any;
    volume: any;
    wrapper: any;

    binSize();
    constructor();
    createAnalyser();
    createProcessor();
    detectPitchAndVolume(buf?: any, sampleRate?: any);
    isOn();
    setResolution(num?: any);
    setupNodes(stream?: any);
    start();
    stepAudio(event?: any);
    stop();
}

export class Morph extends Node {
    acceptsDrops: boolean;
    alpha: number;
    bounds: Rectangle;
    cachedImage: HTMLCanvasElement;
    cachedTexture: HTMLCanvasElement | HTMLImageElement;
    color: Color;
    customContextMenu: any;
    fps: number;
    fullShadowSource: boolean;
    holes: any[];
    isCachingImage: boolean;
    isDraggable: boolean;
    isFreeForm: boolean;
    isMorph: boolean;
    isTemplate: boolean;
    isVisible: boolean;
    lastTime: number;
    noDropShadow: boolean;
    onNextStep: Function;
    shouldRerender: boolean;
    texture: string;

    add(aMorph?: Morph);
    addBack(aMorph?: Morph);
    addShadow(off?: Point, a?: number, color?: any);
    addToDemoMenu(aMorphOrMenuArray?: any);
    allEntryFields();
    attach();
    backTab(editField?: any);
    bottom();
    bottomCenter();
    bottomLeft();
    bottomRight();
    boundingBox();
    center();
    changed();
    childChanged();
    colorSetters();
    constructor();
    contextMenu();
    copy();
    copyRecordingReferences(map?: Map<any, any>);
    corners();
    destroy();
    developersMenu();
    drawOn(ctx?: CanvasRenderingContext2D, rect?: Rectangle);
    escalateEvent(functionName?: string, arg?: InputEvent | KeyboardEvent | Point | Morph);
    evaluateString(code?: any);
    extent();
    fadeTo(endAlpha?: any, msecs?: any, easing?: any, onComplete?: any);
    fixHolesLayout();
    fixLayout();
    fullBounds();
    fullBoundsNoShadow();
    fullChanged();
    fullCopy();
    fullDrawOn(aContext?: CanvasRenderingContext2D, aRect?: Rectangle);
    fullImage();
    getImage();
    getPixelColor(aPoint?: any);
    getRenderColor();
    getShadow();
    glideTo(endPoint?: Point, msecs?: any, easing?: any, onComplete?: Function);
    height();
    hide();
    hierarchyMenu();
    hint(msg?: any);
    inform(msg?: any);
    init();
    inspect(anotherObject?: any);
    inspectKeyEvent(event?: any);
    isCorrectingOutsideDrag();
    isPickedUp();
    isTouching(otherMorph?: any);
    isTransparentAt(aPoint?: Point);
    keepWithin(aMorph?: FrameMorph);
    left();
    leftCenter();
    move();
    moveBy(delta?: Point);
    moveCenter();
    nextEntryField(current?: any);
    nextSteps(arrayOfFunctions?: any);
    nop();
    numericalSetters();
    overlappedMorphs();
    overlappingPixels(otherMorph?: any);
    penTrails();
    perish(msecs?: any, onComplete?: any);
    pickColor(msg?: any, callback?: any, environment?: any, defaultContents?: any);
    pickUp(wrrld?: any);
    position();
    previousEntryField(current?: any);
    prompt(msg?: any, callback?: any, environment?: any, defaultContents?: any, width?: any, floorNum?: any, ceilingNum?: any, isRounded?: any, action?: any);
    removeShadow();
    render(aContext?: CanvasRenderingContext2D);
    renderCachedTexture(ctx?: CanvasRenderingContext2D);
    renderTexture(url?: any, ctx?: any);
    rerender();
    resize();
    right();
    rightCenter();
    rootForGrab();
    scrollIntoView();
    setAlphaScaled(alpha?: any);
    setBottom(y?: number);
    setCenter(aPoint?: Point);
    setColor(aColor?: Color);
    setExtent(aPoint?: Point);
    setFullCenter(aPoint?: any);
    setHeight(height?: number);
    setLeft(x?: number);
    setPosition(aPoint?: Point);
    setRight(x?: number);
    setTop(y?: number);
    setWidth(width?: number);
    shadow(off?: Point, a?: number, color?: any);
    shadowImage(off?: any, color?: any);
    shadowImageBlurred(off?: Point, color?: any);
    show();
    situation();
    slideBackTo(situation?: Object, msecs?: any, onBeforeDrop?: any, onComplete?: any);
    step();
    stepFrame();
    tab(editField?: any);
    toString();
    toggleIsDraggable();
    toggleVisibility();
    top();
    topCenter();
    topLeft();
    topMorphAt(point?: Point);
    topMorphSuchThat(predicate?: any);
    topRight();
    updateReferences(map?: Map<any, any>);
    userMenu();
    visibleBounds();
    wantsDropOf(aMorph?: BlockMorph);
    width();
    world();
}

export class MouseSensorMorph extends BoxMorph {
    border: any;
    borderColor: any;
    color: any;
    downStep: any;
    edge: any;
    isTouched: any;
    upStep: any;

    constructor(edge?: any, border?: any, borderColor?: any);
    init(edge?: any, border?: any, borderColor?: any);
    mouseClickLeft();
    mouseDownLeft();
    mouseEnter();
    mouseLeave();
    touch();
    unTouch();
}

export class MultiArgMorph extends ArgMorph {
    alpha: number;
    canBeEmpty: boolean;
    collapse: string;
    defaultValue: any;
    elementSpec: string;
    groupInputs: number;
    infix: string;
    labelColor: any;
    labelText: string;
    maxInputs: any;
    minInputs: number;
    shadowColor: Color;
    shadowOffset: Point;
    slotSpec: string;

    addInfix();
    addInput(contents?: any);
    addPostfix();
    allLabels();
    arrows();
    collapseAll();
    collapseLabel();
    constructor(slotSpec?: any, labelTxt?: any, min?: any, eSpec?: any, arrowColor?: any, labelColor?: any, shadowColor?: any, shadowOffset?: any, isTransparent?: any, infix?: any, collapse?: any, defaults?: any, group?: any);
    defaultValueFor(index?: number);
    deleteSlot(anInput?: any);
    evaluate();
    fixArrowsLayout();
    fixHolesLayout();
    fixLayout();
    getSpec();
    hide();
    init(slotSpec?: any[] | string, labelTxt?: any[] | string, min?: number, eSpec?: string, arrowColor?: any, labelColor?: any, shadowColor?: any, shadowOffset?: any, isTransparent?: any, infix?: string, collapse?: string, defaults?: any[], group?: string);
    initGroup(aBlockSpec?: string);
    insertNewInputBefore(anInput?: any, contents?: any);
    is3ArgRingInHOF();
    isEmptySlot();
    isVertical();
    label();
    listSymbol();
    mapCodeDelimiter(key?: any);
    mapCodeItem(key?: any);
    mapCodeList(key?: any);
    mapToCode(key?: any, label?: any);
    mappedCode(definitions?: any);
    mouseClickLeft(pos?: Point);
    refresh();
    removeInput();
    removePostfix(idx?: number);
    setContents(anArray?: any[]);
    setInfix(separator?: any);
    setIrreplaceable(irreplaceable?: any);
    setLabelColor(textColor?: Color, shadowColor?: Color, shadowOffset?: Point);
    show();
    slotSpecFor(index?: number);
    toXML(serializer?: SnapSerializer);
    unwind();
    unwindAfter(element?: any);
    userMenu();
}

export class Node extends SnapType {
    children: any[];
    parent: Morph;

    addChild(aNode?: Morph);
    addChildFirst(aNode?: Morph);
    allChildren();
    allLeafs();
    allParents();
    anyChild(aPredicate?: any);
    childThatIsA(...args: any[]);
    constructor(parent?: any, childrenArray?: any);
    depth();
    forAllChildren(aFunction?: Function);
    init(parent?: any, childrenArray?: any);
    parentThatIsA(...args: any[]);
    parentThatIsAnyOf(constructors?: any);
    removeChild(aNode?: Morph);
    root();
    siblings();
    toString();
}

export class Note extends SnapType {
    ended: any;
    fader: any;
    frequency: any;
    oscillator: any;
    pitch: any;

    constructor(pitch?: any);
    getAudioContext();
    pause();
    play(type?: any, gainNode?: any, pannerNode?: any);
    setInstrument(type?: any);
    setupContext();
    stop(immediately?: any);
}

export class PaintCanvasMorph extends Morph {
    automaticCrosshairs: any;
    background: any;
    brushBuffer: any;
    currentTool: any;
    dragRect: any;
    erasermask: any;
    isCachingImage: any;
    mask: any;
    paper: any;
    previousDragPoint: any;
    rotationCenter: any;
    settings: any;
    undoBuffer: any;

    buildContents();
    cacheUndo();
    calculateCanvasCenter(canvas?: any);
    centermerge(a?: any, b?: any);
    clearCanvas();
    constructor(shift?: any);
    drawFrame();
    drawNew();
    drawRectBorder(ctx?: any);
    drawcrosshair(context?: any);
    floodfill(sourcepoint?: any);
    init(shift?: any);
    merge(a?: any, b?: any);
    mouseClickLeft();
    mouseDownLeft(pos?: any);
    mouseLeaveDragging();
    mouseMove(pos?: any);
    rerender();
    scale(x?: any, y?: any);
    toolChanged(tool?: any);
    undo();
    updateAutomaticCenter();
}

export class PaintColorPickerMorph extends Morph {
    action: any;
    isCachingImage: any;

    constructor(extent?: any, action?: any);
    init(extent?: any, action?: any);
    mouseDownLeft(pos?: any);
    mouseMove(pos?: any);
    render(ctx?: any);
}

export class PaintEditorMorph extends DialogBoxMorph {
    ide: any;
    labelString: any;
    oncancel: any;
    paper: any;

    buildContents();
    buildEdits();
    buildScaleBox();
    buildToolbox();
    cancel();
    constructor();
    fixLayout();
    getUserColor();
    init();
    ok();
    openIn(world?: any, oldim?: any, oldrc?: any, callback?: any, anIDE?: any);
    populatePropertiesMenu();
    pushButton(title?: any, action?: any, hint?: any);
    refreshToolButtons();
    switchToVector();
    toolButton(icon?: any, hint?: any);
}

export class PaletteHandleMorph extends Morph {
    color: any;
    isDraggable: any;
    target: any;
    userState: any;

    constructor(target?: any);
    fixLayout();
    init(target?: any);
    mouseDoubleClick();
    mouseDownLeft(pos?: any);
    mouseEnter();
    mouseLeave();
    render(ctx?: any);
    renderOn(ctx?: any, color?: any, shadowColor?: any);
}

export class PenMorph extends Morph {
    heading: number;
    isDown: boolean;
    isWarped: boolean;
    penBounds: Rectangle;
    penPoint: string;
    size: number;

    changed();
    clear();
    constructor();
    developersMenu();
    down();
    drawLine(start?: any, dest?: any);
    endWarp();
    forward(steps?: any);
    init();
    numericalSetters();
    render(ctx?: CanvasRenderingContext2D, facing?: number);
    setHeading(degrees?: any);
    setRotation();
    sierpinski(length?: any, min?: any);
    startWarp();
    tree(level?: any, length?: any, angle?: any);
    turn(degrees?: any);
    up();
    warp(fun?: any);
    warpOp(selector?: any, argsArray?: any);
    warpSierpinski(length?: any, min?: any);
    warpTree(level?: any, length?: any, angle?: any);
}

export class PianoKeyMorph extends MenuItemMorph {
    feedback: any;
    note: any;

    constructor(target?: any, action?: any, labelString?: any, fontSize?: any, fontStyle?: any, environment?: any, hint?: any, color?: any, bold?: any, italic?: any, doubleClickAction?: any, label?: any);
    createLabel();
    init(target?: any, action?: any, labelString?: any, fontSize?: any, fontStyle?: any, environment?: any, hint?: any, color?: any, bold?: any, italic?: any, doubleClickAction?: any, label?: any);
    mouseEnter();
    mouseLeave();
}

export class PianoMenuMorph extends MenuMorph {
    soundType: any;

    constructor(target?: any, environment?: any, fontSize?: any, soundType?: any);
    createItems();
    destroy();
    init(target?: any, environment?: any, fontSize?: any, soundType?: any);
    processKeyDown(event?: any);
    select(aPianoKeyItem?: any);
    selectDown();
    selectKey(midiNum?: any);
    selectUp();
    unselectAllItems();
}

export class Point extends SnapType {
    x: any;
    y: any;

    abs();
    add(other?: number | Point);
    asArray();
    ceil();
    constructor(x?: any, y?: any);
    copy();
    corner(cornerPoint?: Point);
    crossProduct(aPoint?: any);
    degrees();
    distanceAngle(dist?: number, angle?: number);
    distanceTo(aPoint?: Point);
    divideBy(other?: number);
    eq(aPoint?: Point);
    extent(aPoint?: Point);
    flip(direction?: any, center?: any);
    floor();
    floorDivideBy(other?: number);
    ge(aPoint?: any);
    gt(aPoint?: Point);
    le(aPoint?: Point);
    lt(aPoint?: Point);
    max(aPoint?: Point);
    min(aPoint?: Point);
    mirror();
    multiplyBy(other?: number | Point);
    neg();
    r();
    rectangle(aPoint?: any);
    rotate(direction?: any, center?: any);
    rotateBy(angle?: any, centerPoint?: any);
    round();
    scaleBy(scalePoint?: number);
    subtract(other?: number | Point);
    theta();
    toString();
    translateBy(deltaPoint?: any);
}

export class Process extends SnapType {
    canBroadcast: any;
    context: any;
    currentTime: any;
    errorFlag: any;
    exportResult: any;
    flashingContext: any;
    frameCount: any;
    homeContext: any;
    httpRequest: any;
    instrument: any;
    isAtomic: any;
    isClicked: any;
    isDead: any;
    isFirstStep: any;
    isInterrupted: any;
    isPaused: any;
    isShowingResult: any;
    lastYield: any;
    onComplete: any;
    pauseOffset: any;
    procedureCount: any;
    prompter: any;
    readyToTerminate: any;
    readyToYield: any;
    receiver: any;
    stepFrameCount: any;
    topBlock: any;
    yieldCount: any;

    alert(data?: any);
    assemble(blocks?: any);
    assertAlive(thing?: any);
    assertType(thing?: List, typeString?: string);
    audioBufferToWav(buffer?: any, opt?: any);
    blitOn(name?: any, mask?: any, thisObj?: any, stage?: any);
    blockReceiver();
    canRunOptimizedForCombine(aContext?: any);
    capture(aContext?: any);
    changeBackgroundColorDimension(name?: any, num?: any);
    changeColorDimension(name?: any, num?: any);
    changePenColorDimension(name?: any, num?: any);
    checkURLAllowed(url?: any);
    colorAtSprite(sprite?: any);
    colorBelowSprite(sprite?: any);
    compileBlockReferences(context?: any, varName?: any);
    concatenateLinkedLists(lists?: any);
    constructor(topBlock?: any, receiver?: any, onComplete?: any, yieldFirst?: any);
    costumeNamed(name?: any);
    createClone(name?: any);
    decodeSound(sound?: any, callback?: any);
    doAddToList(element?: any, list?: any);
    doApplyExtension(prim?: any, args?: any);
    doAsk(data?: any);
    doBroadcast(message?: any, options?: any);
    doBroadcastAndWait(message?: any, target?: any);
    doCallCC(aContext?: any, isReporter?: any);
    doChangeTempo(delta?: any);
    doChangeVar(varName?: any, value?: any);
    doCutFrom(name?: any);
    doDeclareVariables(varNames?: any);
    doDefineBlock(upvar?: any, label?: any, context?: any);
    doDeleteAttr(attrName?: any);
    doDeleteBlock(context?: any);
    doDeleteFromList(index?: any, list?: any);
    doFaceTowards(name?: any);
    doFor(upvar?: any, start?: any, end?: any, script?: any);
    doForEach(upvar?: any, list?: any, script?: any);
    doForever(body?: any);
    doGlide(secs?: any, endX?: any, endY?: any);
    doGotoObject(name?: any);
    doHideVar(varName?: any, context?: any);
    doIdle(secs?: any);
    doIf(block?: any);
    doIfElse();
    doInsertInList(element?: any, index?: any, list?: any);
    doInterrupt();
    doMapCode(aContext?: any, aString?: any);
    doMapCodeOrHeader(aContext?: any, anOption?: any, aString?: any);
    doMapHeader(aContext?: any, aString?: any);
    doMapListCode(part?: any, kind?: any, aString?: any);
    doMapValueCode(type?: any, aString?: any);
    doPasteOn(name?: any);
    doPauseAll();
    doPlayFrequency(hz?: any, secs?: any);
    doPlayFrequencyForSecs(hz?: any, secs?: any);
    doPlayNote(pitch?: any, beats?: any);
    doPlayNoteForSecs(pitch?: any, secs?: any);
    doPlaySoundAtRate(name?: any, rate?: any);
    doPlaySoundUntilDone(name?: any);
    doRemoveTemporaries();
    doRepeat(counter?: any, body?: any);
    doReplaceInList(index?: any, list?: any, element?: any);
    doReport(block?: any);
    doResetTimer();
    doRest(beats?: any);
    doRun(context?: any, args?: any);
    doSayFor(data?: any, secs?: any);
    doSet(attribute?: any, value?: any);
    doSetBlockAttribute(attribute?: any, block?: any, val?: any);
    doSetFastTracking(bool?: any);
    doSetGlobalFlag(name?: any, bool?: any);
    doSetInstrument(num?: any);
    doSetTempo(bpm?: any);
    doSetVar(varName?: any, value?: any);
    doSetVideoTransparency(factor?: any);
    doShowTable(list?: any);
    doShowVar(varName?: any, context?: any);
    doStop();
    doStopAll();
    doStopAllScenes();
    doStopAllSounds();
    doStopBlock();
    doStopCustomBlock();
    doStopOthers(choice?: any);
    doStopThis(choice?: any);
    doStopWarping();
    doSwitchToScene(id?: any, transmission?: any);
    doTellTo(sprite?: any, context?: any, args?: any);
    doThinkFor(data?: any, secs?: any);
    doUntil(goalCondition?: any, body?: any);
    doWait(secs?: any);
    doWaitUntil(goalCondition?: any);
    doWarp(body?: any);
    doYield();
    encodeSound(samples?: any, rate?: any);
    encodeWAV(samples?: any, format?: any, sampleRate?: any, numChannels?: any, bitDepth?: any);
    errorBubble(error?: any, element?: any);
    errorObsolete();
    evaluate(context?: any, args?: any);
    evaluateArgLabel(argLabel?: any);
    evaluateBlock(block?: ReporterBlockMorph, argCount?: number);
    evaluateContext();
    evaluateCustomBlock();
    evaluateInput(input?: any);
    evaluateMultiSlot(multiSlot?: MultiArgMorph, argCount?: number);
    evaluateNextInput(element?: any);
    evaluateNextInputSet(element?: ReporterBlockMorph);
    evaluateSequence(arr?: any);
    expectReport();
    flashContext();
    flashPausedContext();
    fork(context?: any, args?: any);
    getLastMessage();
    getObjectsNamed(name?: any, thisObj?: any, stageObj?: any);
    getOtherObject(name?: any, thisObj?: any, stageObj?: any);
    getVarNamed(name?: any);
    goToLayer(name?: any);
    guessDelimiterCSV(text?: any);
    handleError(error?: any, element?: any);
    hyper(fn?: any);
    hyperDyadic(baseOp?: any, a?: any, b?: any, atoma?: any, atomb?: any);
    hyperEval(context?: any, args?: any);
    hyperMonadic(baseOp?: any, arg?: any);
    hyperZip(baseOp?: any, a?: any, b?: any, atoma?: any, atomb?: any);
    incrementVarNamed(name?: any, delta?: any);
    initializeFor(context?: any, args?: any);
    inputOption(dta?: any);
    isAST(aList?: any);
    isCoordinate(data?: any);
    isImmutable(obj?: any);
    isMatrix(data?: any);
    isRunning();
    log(data?: any);
    newClone(name?: any);
    objectTouchingObject(thisObj?: any, name?: any);
    parseCSV(text?: any);
    parseJSON(string?: any);
    pause();
    pauseStep();
    playSound(name?: any);
    popContext();
    pushContext(expression?: MultiArgMorph | string, outerContext?: Context);
    rawParseCSV(text?: any, delim?: any);
    reify(topBlock?: CommandBlockMorph, parameterNames?: List, isCustomBlock?: any);
    reifyPredicate(topBlock?: any, parameterNames?: any);
    reifyReporter(topBlock?: any, parameterNames?: any);
    reifyScript(topBlock?: any, parameterNames?: any);
    reportApplyExtension(prim?: any, args?: any);
    reportAskFor(sprite?: any, context?: any, args?: any);
    reportAspect(aspect?: any, location?: any);
    reportAssociativeBool(block?: any, baseOp?: any, short?: any);
    reportAtan2(a?: any, b?: any);
    reportAtomicCombine(list?: any, reporter?: any);
    reportAtomicFindFirst(reporter?: any, list?: any);
    reportAtomicGroup(list?: any, reporter?: any);
    reportAtomicKeep(reporter?: any, list?: any);
    reportAtomicMap(reporter?: any, list?: any);
    reportAtomicSort(list?: any, reporter?: any);
    reportAttributeOf(attribute?: any, name?: any);
    reportAudio(choice?: any);
    reportBasicAnd(a?: any, b?: any);
    reportBasicAtan2(a?: any, b?: any);
    reportBasicAttributeOf(attribute?: any, name?: any);
    reportBasicBlockAttribute(attribute?: any, block?: any);
    reportBasicDifference(a?: any, b?: any);
    reportBasicGreaterThan(a?: any, b?: any);
    reportBasicLessThan(a?: any, b?: any);
    reportBasicLetter(idx?: any, string?: any);
    reportBasicMax(a?: any, b?: any);
    reportBasicMin(a?: any, b?: any);
    reportBasicModulus(a?: any, b?: any);
    reportBasicMonadic(fname?: any, n?: any);
    reportBasicNumbers(start?: any, end?: any);
    reportBasicOr(a?: any, b?: any);
    reportBasicPower(a?: any, b?: any);
    reportBasicProduct(a?: any, b?: any);
    reportBasicQuotient(a?: any, b?: any);
    reportBasicRandom(min?: any, max?: any);
    reportBasicRelationTo(relation?: any, name?: any);
    reportBasicRound(n?: any);
    reportBasicSum(a?: any, b?: any);
    reportBasicTextSplit(string?: any, delimiter?: any);
    reportBasicUnicodeAsLetter(num?: any);
    reportBlockAttribute(attribute?: any, block?: any);
    reportBoolean(bool?: any);
    reportCDR(list?: any);
    reportCONS(car?: any, cdr?: any);
    reportCallCC(aContext?: any);
    reportCaller(trgt?: any);
    reportCombine(list?: any, reporter?: any);
    reportCompiled(context?: any, implicitParamCount?: any);
    reportConcatenatedLists(lists?: any);
    reportContextFor(context?: any, otherObj?: any);
    reportContinuation(trgt?: any);
    reportCrossproduct(lists?: any);
    reportDate(datefn?: any);
    reportDifference(a?: any, b?: any);
    reportDirectionTo(name?: any);
    reportDistanceTo(name?: any);
    reportDistribution(list?: any);
    reportEnvironment(choice?: any, trgt?: any);
    reportEquals(a?: any, b?: any);
    reportFindFirst(predicate?: any, list?: any);
    reportFrameCount();
    reportGet(query?: any);
    reportGetImageAttribute(choice?: any, name?: any);
    reportGetSoundAttribute(choice?: any, soundName?: any);
    reportGetVar();
    reportGlobalFlag(name?: any);
    reportGreaterThan(a?: any, b?: any);
    reportGreaterThanOrEquals(a?: any, b?: any);
    reportIfElse(block?: any);
    reportInputs(trgt?: any);
    reportIsA(thing?: any, typeString?: any);
    reportIsBefore(a?: any, b?: any);
    reportIsFastTracking();
    reportIsIdentical(a?: any, b?: any);
    reportJSFunction(parmNames?: any, body?: any);
    reportJoin(a?: any, b?: any);
    reportJoinWords(aList?: any);
    reportKeep(predicate?: any, list?: any);
    reportKeyPressed(keyString?: any);
    reportLastAnswer();
    reportLessThan(a?: any, b?: any);
    reportLessThanOrEquals(a?: any, b?: any);
    reportLetter(idx?: any, string?: any);
    reportLinkedNumbers(start?: any, end?: any);
    reportListAggregation(list?: List, selector?: string);
    reportListAttribute(choice?: any, list?: any);
    reportListCombination(choice?: any, lists?: any);
    reportListContainsItem(list?: any, element?: any);
    reportListIndex(element?: any, list?: any);
    reportListIsEmpty(list?: any);
    reportListItem(index?: any, list?: any);
    reportListLength(list?: any);
    reportMap(reporter?: any, list?: any);
    reportMappedCode(aContext?: any);
    reportMax(a?: any, b?: any);
    reportMin(a?: any, b?: any);
    reportModulus(a?: any, b?: any);
    reportMonadic(fname?: any, n?: any);
    reportMouseDown();
    reportMousePosition();
    reportMouseX();
    reportMouseY();
    reportNewCostume(pixels?: any, width?: any, height?: any, name?: any);
    reportNewCostumeStretched(name?: any, xP?: any, yP?: any);
    reportNewList(elements?: any);
    reportNewSoundFromSamples(samples?: any, rate?: any);
    reportNot(bool?: any);
    reportNotEquals(a?: any, b?: any);
    reportNumbers(start?: any, end?: any);
    reportObject(name?: any);
    reportPentrailsAsSVG();
    reportPipe(value?: any, reporterList?: any);
    reportPower(a?: any, b?: any);
    reportProduct(a?: any, b?: any);
    reportQuotient(a?: any, b?: any);
    reportRandom(a?: any, b?: any);
    reportRayLengthTo(name?: any, relativeAngle?: any);
    reportRelationTo(relation?: any, name?: any);
    reportReshape(list?: any, shape?: any);
    reportRound(n?: any);
    reportScript(parameterNames?: any, topBlock?: any);
    reportSelf(trgt?: any);
    reportSequentialComparison(op?: any, items?: any, notHyper?: any);
    reportShuffled(data?: any);
    reportSlice(list?: any, indices?: any);
    reportSorted(data?: any);
    reportStackSize();
    reportStringSize(data?: any);
    reportSum(a?: any, b?: any);
    reportTempo();
    reportTextAttribute(choice?: any, text?: any);
    reportTextFunction(fname?: any, string?: any);
    reportTextSplit(string?: any, delimiter?: any);
    reportTimer();
    reportTouchingObject(name?: any);
    reportTranspose(list?: any);
    reportTypeOf(thing?: List);
    reportURL(url?: any);
    reportUnicode(string?: any);
    reportUnicodeAsLetter(num?: any);
    reportUniqueValues(list?: any);
    reportVariadicAnd(block?: any);
    reportVariadicEquals(items?: any);
    reportVariadicGreaterThan(items?: any);
    reportVariadicGreaterThanOrEquals(items?: any);
    reportVariadicIsIdentical(items?: any);
    reportVariadicLessThan(items?: any);
    reportVariadicLessThanOrEquals(items?: any);
    reportVariadicMax(numbers?: any);
    reportVariadicMin(numbers?: any);
    reportVariadicNotEquals(items?: any);
    reportVariadicOr(block?: any);
    reportVariadicProduct(numbers?: any);
    reportVariadicSum(numbers?: List);
    reportVideo(attribute?: any, name?: any);
    reportYieldCount();
    resetErrorHandling();
    resume();
    returnValueToParentContext(value?: List | number);
    runContinuation(aContext?: any, args?: any);
    runStep(deadline?: any);
    setBackgroundColorDimension(name?: any, num?: any);
    setColorDimension(name?: any, num?: any);
    setHeading(direction?: any);
    setMicrophoneModifier(modifier?: any);
    setPenColorDimension(name?: any, num?: any);
    setVarNamed(name?: any, value?: any);
    shadowListAttribute(list?: any);
    slotSpec(num?: any);
    slotType(spec?: any);
    spritesAtPoint(point?: any, stage?: any);
    startVideo(stage?: any);
    stop();
    throwError(error?: any, element?: any);
    tryCatch(action?: any, exception?: any, errVarName?: any);
    unflash();
    untype(typedArray?: any);
    variableError(varName?: any);
}

export class Project extends SnapType {
    currentScene: any;
    guid: any;
    name: any;
    notes: any;
    sceneIdx: any;
    scenes: any;
    thumbnail: any;
    trash: any;

    addDefaultScene();
    constructor(scenes?: any, current?: any, guid?: any);
    initialize();
    toXML(serializer?: SnapSerializer);
}

export class ProjectDialogMorph extends DialogBoxMorph {
    deleteButton: any;
    filterField: any;
    handle: any;
    ide: any;
    key: any;
    labelString: any;
    listField: any;
    magnifyingGlass: any;
    nameField: any;
    notesField: any;
    notesText: any;
    onNextStep: any;
    preview: any;
    projectList: any;
    publishButton: any;
    recoverButton: any;
    shareButton: any;
    source: any;
    srcBar: any;
    task: any;
    unpublishButton: any;
    unshareButton: any;

    addButton(action?: any, label?: any, topRow?: any);
    addCloudScene(project?: any, delta?: any);
    addScene();
    addSourceButton(source?: any, label?: any, symbol?: any);
    buildContents();
    buildFilterField();
    clearDetails();
    constructor(ide?: any, label?: any);
    createButtons();
    deleteProject();
    edit();
    fixLayout();
    fixListFieldItemColors();
    getExamplesProjectList();
    getLocalProjectList();
    hasLocalProjects();
    init(ide?: any, task?: any);
    installCloudProjectList(pl?: any);
    openCloudProject(project?: any, delta?: any);
    openProject();
    popUp(wrrld?: any);
    publishProject();
    rawOpenCloudProject(proj?: any, delta?: any);
    recoveryDialog();
    saveCloudProject();
    saveProject();
    setSource(source?: any);
    shareProject();
    unpublishProject();
    unshareProject();
}

export class ProjectRecoveryDialogMorph extends DialogBoxMorph {
    browser: any;
    handle: any;
    ide: any;
    key: any;
    labelString: any;
    listField: any;
    notesField: any;
    notesText: any;
    preview: any;
    projectName: any;
    versions: any;

    buildContents();
    buildListField();
    cancel();
    clearDetails();
    constructor(ide?: any, project?: any, browser?: any);
    fixLayout();
    fixListFieldItemColors();
    init(ide?: any, projectName?: any, browser?: any);
    popUp();
    recoverProject();
}

export class PrototypeHatBlockMorph extends HatBlockMorph {
    blockCategory: any;
    category: any;
    color: any;
    definition: any;
    isHelper: any;
    type: any;

    constructor(definition?: any);
    enableBlockVars(choice?: any);
    exportBlockDefinition();
    fixBlockColor(nearestBlock?: any, isForced?: any);
    init(definition?: any);
    mouseClickLeft();
    userMenu();
    variableNames(choice?: any);
}

export class PushButtonMorph extends TriggerMorph {
    action: any;
    color: Color;
    environment: any;
    hideable: boolean;
    hint: any;
    is3D: boolean;
    isDisabled: boolean;
    label: Morph;
    labelMinExtent: Point;
    labelString: any[] | string | SymbolMorph;
    target: Window | Morph;

    constructor(target?: any, action?: any, labelString?: any, environment?: any, hint?: any);
    createLabel();
    disable();
    drawBackground(ctx?: CanvasRenderingContext2D, color?: Color);
    drawEdges(ctx?: CanvasRenderingContext2D, color?: Color, topColor?: Color, bottomColor?: Color);
    drawOutline(ctx?: CanvasRenderingContext2D);
    enable();
    fixLayout();
    init(target?: Window | Morph, action?: Function | string, labelString?: any[] | string | SymbolMorph, environment?: any, hint?: Function | string);
    mouseClickLeft();
    mouseDownLeft();
    mouseLeave();
    outlinePath(ctx?: CanvasRenderingContext2D, corner?: number, inset?: number);
    render(ctx?: CanvasRenderingContext2D);
    updateLabelColors();
}

export class ReadStream extends SnapType {
    contents: any;
    index: any;

    atEnd();
    constructor(arrayOrString?: any);
    next(count?: any);
    peek();
    peekUpTo(str?: any);
    skip(count?: any);
    skipSpace();
    upTo(str?: any);
    word();
}

export class Rectangle extends SnapType {
    corner: any;
    origin: any;

    abs();
    amountToTranslateWithin(aRect?: any);
    area();
    asArray();
    asArray_xywh();
    bottom();
    bottomCenter();
    bottomLeft();
    bottomRight();
    boundingBox();
    center();
    constructor(left?: any, top?: any, right?: any, bottom?: any);
    containsPoint(aPoint?: Point);
    containsRectangle(aRect?: any);
    copy();
    corners();
    eq(aRect?: Rectangle);
    expandBy(delta?: number);
    extent();
    growBy(delta?: number | Point);
    height();
    init(originPoint?: Point, cornerPoint?: Point);
    insetBy(delta?: number);
    intersect(aRect?: Rectangle);
    intersects(aRect?: Rectangle);
    isNearTo(aRect?: Rectangle, threshold?: number);
    left();
    leftCenter();
    merge(aRect?: Rectangle);
    mergeWith(aRect?: Rectangle);
    position();
    regionsAround(aRect?: any);
    right();
    rightCenter();
    round();
    scaleBy(scale?: any);
    setExtent(aPoint?: Point);
    setHeight(height?: number);
    setTo(left?: any, top?: any, right?: any, bottom?: any);
    setWidth(width?: number);
    spread();
    toString();
    top();
    topCenter();
    topLeft();
    topRight();
    translateBy(delta?: Point);
    width();
}

export class ReporterBlockMorph extends BlockMorph {
    cachedSlotSpec: string;
    isLocalVarTemplate: any;
    isPredicate: boolean;

    blockSequence();
    constructor(isPredicate?: any);
    determineSlotSpec();
    drawEdges(ctx?: CanvasRenderingContext2D);
    drawEdgesDiamond(ctx?: CanvasRenderingContext2D);
    drawEdgesOval(ctx?: CanvasRenderingContext2D);
    getSlotSpec();
    init(isPredicate?: boolean);
    isLocked();
    isUnevaluated();
    mouseClickLeft(pos?: Point);
    outlinePath(ctx?: CanvasRenderingContext2D, inset?: number);
    outlinePathDiamond(ctx?: CanvasRenderingContext2D, inset?: number);
    outlinePathOval(ctx?: CanvasRenderingContext2D, inset?: number);
    prepareToBeGrabbed(handMorph?: HandMorph);
    snap(hand?: HandMorph);
    toScriptXML(serializer?: SnapSerializer, savePosition?: boolean);
    toXML(serializer?: SnapSerializer);
    userDestroy();
}

export class ReporterSlotMorph extends FunctionSlotMorph {

    constructor(isPredicate?: any);
    contents();
    emptySlot();
    evaluate();
    fixLayout();
    getSpec();
    init(isPredicate?: boolean);
    isEmptySlot();
    nestedBlock();
}

export class RingCommandSlotMorph extends CommandSlotMorph {
    color: Color;
    contrast: number;

    constructor();
    getSpec();
    init();
    outlinePath(ctx?: CanvasRenderingContext2D, offset?: Point);
    render(ctx?: CanvasRenderingContext2D);
}

export class RingMorph extends ReporterBlockMorph {
    category: string;
    contrast: number;

    constructor();
    contents();
    dataType();
    embed(aBlock?: any, inputNames?: any, noVanish?: any);
    fixBlockColor(nearest?: any, isForced?: any);
    init();
    inputNames();
    isEmptySlot();
    render(ctx?: CanvasRenderingContext2D);
    rootForGrab();
    unwind();
    unwindAfter(elem?: any);
    userMenu();
    vanishForSimilar();
}

export class RingReporterSlotMorph extends ReporterSlotMorph {
    contrast: number;

    attachTargets();
    constructor(isPredicate?: any);
    dentCenter();
    dentLeft();
    drawEdgesDiamond(ctx?: CanvasRenderingContext2D);
    drawEdgesOval(ctx?: CanvasRenderingContext2D);
    fixLayout();
    getSpec();
    init(isPredicate?: boolean);
    nestedBlock(block?: any);
    outlinePath(ctx?: CanvasRenderingContext2D, offset?: Point);
    outlinePathDiamond(ctx?: CanvasRenderingContext2D, offset?: Point);
    outlinePathOval(ctx?: CanvasRenderingContext2D, offset?: Point);
    render(ctx?: CanvasRenderingContext2D);
    replaceInput(source?: any, target?: any, noVanish?: any);
    slotAttachPoint();
}

export class Scene extends SnapType {
    codeHeaders: any;
    codeMappings: any;
    currentSprite: any;
    customCategories: any;
    disableClickToRun: any;
    disableDraggingData: any;
    enableCodeMapping: any;
    enableHyperOps: any;
    enableInheritance: any;
    enableLiveCoding: any;
    enablePenLogging: any;
    enableSublistIDs: any;
    globalVariables: any;
    hasUnsavedEdits: any;
    hiddenPrimitives: any;
    name: any;
    notes: any;
    penColorModel: any;
    showCategories: any;
    showPaletteButtons: any;
    spriteIdx: any;
    sprites: any;
    spritesDict: any;
    stage: any;
    targetStage: any;
    trash: any;
    unifiedPalette: any;
    useFlatLineEnds: any;

    addDefaultSprite();
    applyGlobalSettings();
    captureGlobalSettings();
    constructor(aStageMorph?: any);
    initialize();
    stop(forGood?: any);
    toXML(serializer?: SnapSerializer);
    updateTrash();
}

export class SceneAlbumMorph extends ScrollFrameMorph {
    ide: any;
    scene: any;
    version: any;

    constructor(anIDE?: any, sliderColor?: any);
    init(anIDE?: any, sliderColor?: any);
    reactToDropOf(icon?: any);
    removeSceneAt(idx?: any);
    step();
    updateList();
    updateSelection();
    wantsDropOf(morph?: any);
}

export class SceneIconMorph extends ToggleButtonMorph {
    corner: any;
    fps: any;
    isDraggable: any;
    object: any;
    padding: any;
    thumbnail: any;
    version: any;

    constructor(aScene?: any);
    createLabel();
    createThumbnail();
    exportScene();
    fixLayout();
    init(aScene?: any);
    isProjectScene(anIDE?: any);
    prepareToBeGrabbed();
    query();
    removeScene();
    renameScene();
    render(ctx?: any);
    rootForGrab();
    step();
    userMenu();
}

export class ScriptFocusMorph extends BoxMorph {
    atEnd: any;
    editor: any;
    element: any;

    blockTypes();
    constructor(editor?: any, initialElement?: any, position?: any);
    deleteLastElement();
    fillInBlock(block?: any);
    fixLayout();
    getFocus(world?: any);
    init(editor?: any, initialElement?: any, position?: any);
    insertBlock(block?: any);
    insertVariableGetter();
    items();
    lastCommand();
    lastElement();
    lastScript();
    manifestExpression();
    manifestStatement();
    menu();
    newScript();
    nextCommand();
    nextElement();
    nextScript();
    processKeyDown(event?: any);
    processKeyEvent(event?: any, action?: any);
    processKeyPress(event?: any);
    processKeyUp(event?: any);
    reactToKeyEvent(key?: any);
    redrop();
    runScript();
    shiftScript(deltaPoint?: any);
    sortedScripts();
    stopEditing();
    trigger();
    undrop();
}

export class ScriptsMorph extends FrameMorph {
    dropRecord: Object;
    feedbackMorph: BoxMorph;
    focus: any;
    isAnimating: boolean;
    lastDropTarget: Object | ReporterBlockMorph;
    lastDroppedBlock: Morph;
    lastNextBlock: any;
    lastPreservedBlocks: any;
    lastReplacedInput: InputSlotMorph;
    lastWrapParent: any;
    rejectsHats: boolean;

    addComment();
    addToolbar();
    cleanUp(silently?: any);
    clearDropInfo();
    closestBlock(comment?: any, hand?: any);
    closestInput(reporter?: ReporterBlockMorph, hand?: HandMorph);
    constructor();
    droppedImage(aCanvas?: any, name?: any, embeddedData?: any);
    edit(pos?: any);
    elementsAtLOC();
    exportScriptsPicture();
    fixMultiArgs();
    flashLOC(start?: any, end?: any);
    fullCopy();
    getRenderColor();
    init();
    mouseClickLeft(pos?: Point);
    reactToDropOf(droppedMorph?: BlockMorph, hand?: HandMorph);
    recordDrop(lastGrabOrigin?: Object);
    recoverLastDrop(forRedrop?: any);
    redrop();
    render(aContext?: CanvasRenderingContext2D);
    renderCachedTexture(ctx?: CanvasRenderingContext2D);
    scriptTarget();
    scriptsPicture();
    scriptsXML();
    selectForEdit();
    showCSlotWrapFeedback(srcBlock?: any, trgBlock?: any);
    showCommandDropFeedback(block?: CommandBlockMorph);
    showCommentDropFeedback(comment?: any, hand?: any);
    showReporterDropFeedback(block?: ReporterBlockMorph, hand?: HandMorph);
    sortedElements();
    step();
    toXML(serializer?: SnapSerializer);
    toggleKeyboardEntry();
    undrop();
    unflash();
    updateToolbar();
    userMenu();
    wantsDropOf(aMorph?: BlockMorph);
}

export class ScrollFrameMorph extends FrameMorph {
    autoScrollTrigger: number;
    contents: FrameMorph;
    enableAutoScrolling: boolean;
    growth: number | Point;
    hBar: SliderMorph;
    hasVelocity: boolean;
    isScrollingByDragging: boolean;
    isTextLineWrapping: boolean;
    padding: number;
    scrollBarSize: number;
    toolBar: AlignmentMorph;
    vBar: SliderMorph;

    addContents(aMorph?: Morph);
    adjustScrollBars();
    adjustToolBar();
    autoScroll(pos?: Point);
    constructor(scroller?: any, size?: any, sliderColor?: any);
    developersMenu();
    init(scroller?: ScriptsMorph, size?: any, sliderColor?: Color);
    mouseDownLeft(pos?: Point);
    mouseScroll(y?: any, x?: any);
    scrollCursorIntoView(morph?: any);
    scrollX(steps?: number);
    scrollY(steps?: number);
    setContents(aMorph?: any);
    setExtent(aPoint?: Point);
    startAutoScrolling();
    step();
    toggleTextLineWrapping();
    updateReferences(map?: any);
}

export class ShadowMorph extends Morph {
    isCachingImage: boolean;

    constructor();
    init();
    topMorphAt();
}

export class SliderButtonMorph extends CircleBoxMorph {
    color: Color;
    hasMiddleDip: boolean;
    highlightColor: Color;
    is3D: boolean;
    pressColor: Color;
    userState: string;

    autoOrientation();
    constructor(orientation?: any);
    init(orientation?: any);
    mouseClickLeft();
    mouseDownLeft(pos?: any);
    mouseEnter();
    mouseLeave();
    mouseMove();
    render(ctx?: CanvasRenderingContext2D);
    renderEdges(ctx?: CanvasRenderingContext2D);
}

export class SliderMorph extends CircleBoxMorph {
    action: Function;
    alpha: number;
    button: SliderButtonMorph;
    color: Color;
    offset: any;
    size: number;
    start: number;
    stop: number;
    target: any;
    value: number;

    autoOrientation();
    constructor(start?: any, stop?: any, value?: any, size?: any, orientation?: any, color?: any);
    developersMenu();
    fixLayout();
    init(start?: number, stop?: number, value?: number, size?: number, orientation?: string, color?: Color);
    mouseDownLeft(pos?: any);
    numericalSetters();
    rangeSize();
    ratio();
    setSize(num?: any, noUpdate?: any);
    setStart(num?: any, noUpdate?: any);
    setStop(num?: any, noUpdate?: any);
    setTarget();
    setTargetSetter();
    showValue();
    unitSize();
    updateTarget();
    updateValue();
    userSetStart(num?: any);
}

export class SnapEventManager extends SnapType {
    eventListeners: any;
    globalListeners: any;

    addEventListener(eventType?: any, listener?: any);
    addGlobalListener(listener?: any);
    constructor();
    init();
    log(eventType?: any, data?: any);
}

export class SnapSerializer extends XML_Serializer {
    mediaDict: any;
    objects: any;
    scene: any;

    constructor();
    init();
    load(xmlString?: any, ide?: any);
    loadBlock(model?: any, isReporter?: any, object?: any);
    loadBlocks(xmlString?: any, targetStage?: any);
    loadBlocksModel(model?: any, targetStage?: any);
    loadColor(colorString?: any);
    loadComment(model?: any);
    loadCostumes(object?: any, model?: any);
    loadCustomBlocks(object?: any, element?: any, isGlobal?: any, isDispatch?: any);
    loadInheritanceInfo(object?: any, model?: any);
    loadInput(model?: any, input?: any, block?: any, object?: any);
    loadMedia(xmlString?: any);
    loadMediaModel(xmlNode?: any);
    loadNestingInfo(object?: any, model?: any);
    loadObject(object?: any, model?: any);
    loadPalette(model?: any);
    loadProjectModel(xmlNode?: any, ide?: any, remixID?: any);
    loadScene(xmlNode?: any, appVersion?: any, remixID?: any);
    loadScript(model?: any, object?: any);
    loadScriptModel(model?: any, object?: any);
    loadScripts(object?: any, scripts?: any, model?: any);
    loadScriptsArray(model?: any, object?: any);
    loadSounds(object?: any, model?: any);
    loadSpritesModel(xmlNode?: any, ide?: any);
    loadValue(model?: any, object?: any, silently?: any);
    loadVariables(varFrame?: any, element?: any, object?: any);
    obsoleteBlock(isReporter?: any);
    paletteToXML(aMap?: any);
    populateCustomBlocks(object?: any, element?: any, isGlobal?: any);
    setBlockId(model?: any, block?: any);
}

export class Sound extends SnapType {
    audio: any;
    audioBuffer: any;
    cachedSamples: any;
    isDecoding: any;
    loaded: any;
    name: any;

    constructor(audio?: any, name?: any);
    copy();
    play();
    toDataURL();
    toXML(serializer?: any);
}

export class SoundIconMorph extends ToggleButtonMorph {
    corner: any;
    fps: any;
    isDraggable: any;
    object: any;
    padding: any;
    thumbnail: any;
    version: any;

    audioHasEnded();
    constructor(aSound?: any);
    createInfo();
    createLabel();
    createThumbnail();
    disinherit();
    exportSound();
    fixLayout();
    init(aSound?: any);
    prepareToBeGrabbed();
    query();
    removeSound();
    renameSound();
    render(ctx?: any);
    toggleAudioPlaying();
    userMenu();
}

export class SoundRecorderDialogMorph extends DialogBoxMorph {
    accept: any;
    audioElement: any;
    labelString: any;
    mediaRecorder: any;
    padding: any;
    playButton: any;
    progressBar: any;
    recordButton: any;
    stopButton: any;

    buildContents();
    buildProgressBar();
    constructor(onAccept?: any);
    destroy();
    init(onAccept?: any);
    ok();
    play();
    record();
    stop();
}

export class SpeechBubbleMorph extends BoxMorph {
    color: any;
    contents: any;
    fullShadowSource: any;
    hasShadow: any;
    isClickable: any;
    isPointingRight: any;
    isThought: any;
    noDropShadow: any;
    padding: any;

    constructor(contents?: any, color?: any, edge?: any, border?: any, borderColor?: any, padding?: any, isThought?: any, noShadow?: any);
    fixLayout();
    init(contents?: TextMorph, color?: any, edge?: number, border?: number, borderColor?: any, padding?: any, isThought?: any, noShadow?: any);
    outlinePath(ctx?: CanvasRenderingContext2D, radius?: number, inset?: number);
    popUp(world?: WorldMorph, pos?: Point, isClickable?: boolean);
    shadowImage(off?: any, color?: any);
    shadowImageBlurred(off?: Point, color?: any);
}

export class SpriteBubbleMorph extends SpeechBubbleMorph {
    bubbleBorder: any;
    bubbleCorner: any;
    bubbleFontColor: any;
    bubbleFontIsBold: any;
    bubbleFontSize: any;
    bubblePadding: any;
    data: any;
    isCachingImage: any;
    isQuestion: any;
    scale: any;
    stage: any;

    constructor(data?: any, stage?: any, isThought?: any, isQuestion?: any);
    dataAsMorph(data?: any);
    fixLayout();
    init(data?: any, stage?: any, isThought?: any, isQuestion?: any);
    setScale(scale?: any);
}

export class SpriteHighlightMorph extends Morph {
    isCachingImage: any;

    constructor();
    init();
}

export class SpriteIconMorph extends ToggleButtonMorph {
    corner: any;
    fps: any;
    isDraggable: any;
    isFlashing: any;
    object: any;
    padding: any;
    previousColor: any;
    previousOutline: any;
    previousState: any;
    rotationButton: any;
    thumbnail: any;
    version: any;

    chooseExemplar();
    constructor(aSprite?: any);
    copyCostume(costume?: any);
    copySound(sound?: any);
    copyStack(block?: any);
    createLabel();
    createRotationButton();
    createThumbnail();
    duplicateSprite();
    exportSprite();
    fixLayout();
    flash();
    flashOff();
    flashOn();
    getRenderColor();
    init(aSprite?: any);
    instantiateSprite();
    justDropped();
    mouseDoubleClick();
    prepareToBeGrabbed();
    query();
    reactToDropOf(morph?: any, hand?: any);
    releaseSprite();
    removeSprite();
    render(ctx?: any);
    showSpriteOnStage();
    step();
    userMenu();
    wantsDropOf(morph?: any);
}

export class SpriteMorph extends PenMorph {
    anchor: any;
    cachedColorDimensions: any[];
    cachedPropagation: boolean;
    categoriesCache: Object;
    cloneOriginName: string;
    costume: any;
    costumes: List;
    customBlocks: any[];
    exemplar: any;
    frameNumber: number;
    freqPlayer: any;
    gainNode: any;
    graphicsValues: Object;
    heading: number;
    idx: number;
    imageData: Object;
    imageExtent: Point;
    imageOffset: Point;
    inheritedAttributes: any[];
    inheritedMethodsCache: any[];
    instances: any[];
    instrument: any;
    isCorpse: boolean;
    isDown: boolean;
    isDraggable: boolean;
    isFreeForm: boolean;
    isTemporary: boolean;
    layers: any;
    motionAmount: number;
    motionDirection: number;
    name: string;
    nestingScale: number;
    normalExtent: Point;
    paletteCache: Object;
    pan: number;
    pannerNode: any;
    parts: any[];
    primitivesCache: Object;
    rotatesWithAnchor: boolean;
    rotationOffset: Point;
    rotationStyle: number;
    scale: number;
    scripts: ScriptsMorph;
    solution: any;
    sounds: List;
    variables: VariableFrame;
    version: number;
    volume: number;

    addAllInvocationsOf(aSpec?: any, anArray?: any);
    addCostume(costume?: any);
    addHighlight(oldHighlight?: any);
    addSound(audio?: any, name?: any);
    addSpecimen(another?: any);
    addVariable(name?: string, isGlobal?: boolean);
    allAnchors();
    allBlockInstances(definition?: CustomBlockDefinition);
    allBlocks(valuesOnly?: any);
    allCategories();
    allDependentInvocationsOf(aSpec?: any);
    allEditorBlockInstances(definition?: CustomBlockDefinition, spec?: any);
    allExemplars();
    allGenericHatBlocks();
    allGlobalVariableNames(sorted?: boolean, all?: boolean);
    allHatBlocksFor(message?: string);
    allHatBlocksForInteraction(interaction?: string);
    allHatBlocksForKey(key?: any);
    allHatBlocksForUserEdit(spriteName?: string);
    allIndependentInvocationsOf(aSpec?: any);
    allInvocationsOf(aSpec?: any);
    allLocalBlockInstances(definition?: CustomBlockDefinition);
    allLocalVariableNames(sorted?: boolean, all?: boolean);
    allMessageNames();
    allPaletteBlocks();
    allParts();
    allScripts();
    allSendersOf(message?: any, receiverName?: any, known?: any);
    allSpecimens();
    anchorsMenu(targets?: any[]);
    angleToXY(x?: any, y?: any);
    appearIn(ide?: IDE_Morph);
    applyGraphicsEffects(canvas?: HTMLCanvasElement);
    attachPart(aSprite?: any);
    attachTo(aSprite?: any);
    audioContext();
    blitOn(target?: any, mask?: any);
    blockColorFor(category?: string);
    blockForSelector(selector?: string, setDefaults?: boolean);
    blockTemplates();
    blocksMatching(searchString?: any, strictly?: any, types?: any, varNames?: any);
    booleanMorph(bool?: any);
    bounceOffEdge();
    bubble(data?: any, isThought?: any, isQuestion?: any);
    categoryText(category?: any);
    changeBlockVisibility(aBlock?: any, hideIt?: any, quick?: any);
    changeColorDimension(idx?: any, delta?: any);
    changeColorRGBA(dta?: any);
    changeEffect(effect?: any, value?: any);
    changePan(delta?: any);
    changeScale(delta?: any);
    changeSize(delta?: any);
    changeVolume(delta?: any);
    changeXPosition(delta?: any);
    changeYPosition(delta?: any);
    chooseExemplar();
    clear();
    clearEffects();
    clonify(stage?: any, immediately?: any);
    comeToFront();
    constructor(globals?: any);
    corpsify();
    createClone(immediately?: any);
    customBlockTemplatesForCategory(category?: string, includeHidden?: any);
    customPaletteButton(descriptor?: any);
    deletableVariableNames();
    deleteAllBlockInstances(definition?: any);
    deleteVariable(varName?: any, isGlobal?: any);
    deleteVariableButton();
    deleteVariableWatcher(varName?: any, isGlobal?: any);
    destroy();
    detachAllParts();
    detachFromAnchor();
    detachPart(aSprite?: any);
    devModeText();
    direction();
    doPlaySound(name?: any);
    doScreenshot(imgSource?: any, data?: any);
    doStamp();
    doSwitchToCostume(id?: any, noShadow?: any);
    doThink(data?: any);
    doWearNextCostume();
    doWearPreviousCostume();
    doubleDefinitionsFor(definition?: any);
    down();
    drawLine(start?: any, dest?: any);
    duplicate();
    edit();
    emancipate();
    emptyCategories();
    exportSprite();
    faceToXY(x?: any, y?: any);
    findVariableWatcher(varName?: string, isGlobal?: boolean);
    fixLayout();
    flash();
    flashScope(varName?: any, isGlobal?: any);
    floodFill();
    forward(steps?: any);
    freshPalette(category?: string);
    fullCopy(forClone?: any);
    fullDrawOn(aContext?: CanvasRenderingContext2D, aRect?: Rectangle);
    fullThumbnail(extentPoint?: Point, recycleMe?: any);
    getColorDimension(idx?: any);
    getCostumeIdx();
    getEffect(effect?: any);
    getGainNode();
    getGhostEffect();
    getHighlight();
    getImage();
    getImageData();
    getLastAnswer();
    getLastMessage();
    getLocalMethod(spec?: any);
    getMethod(spec?: any);
    getPan();
    getPannerNode();
    getPenAttribute(attrib?: any);
    getPenDown();
    getPosition();
    getPrimitiveTemplates(category?: string);
    getScale();
    getTempo();
    getTimer();
    getVolume();
    glide(duration?: any, endX?: any, endY?: any, elapsed?: any, startPoint?: any);
    globalVariables();
    goBack(layers?: any);
    goToBack();
    gotoXY(x?: any, y?: any, justMe?: any, noShadow?: any);
    graphicsChanged();
    hasGenericHatBlocks();
    hasPrimitiveCategories();
    helpMenu();
    hide();
    highlight(color?: any, border?: any);
    highlightImage(color?: any, border?: any);
    inheritAttribute(aName?: any);
    inheritedBlocks(valuesOnly?: any);
    inheritedMethods();
    inheritedVariableNames(shadowedOnly?: any);
    inheritsAttribute(aName?: string);
    init(globals?: any);
    initBlockMigrations();
    initBlocks();
    initClone(hats?: any);
    instantiate();
    isCorrectingOutsideDrag();
    isDisablingBlock(aBlock?: any);
    isHidingBlock(aBlock?: BlockMorph);
    justDropped();
    makeBlock();
    makeBlockButton(category?: string);
    makeVariableButton();
    mouseClickLeft();
    mouseDoubleClick();
    mouseDownLeft();
    mouseEnter();
    mouseEnterDragging();
    mouseLeave();
    mouseScroll(y?: any);
    moveBy(delta?: Point, justMe?: any);
    moveRotationCenter();
    neighbors(aStage?: any);
    nestingBounds();
    newClone(immediately?: any);
    newCostumeName(name?: any, ignoredCostume?: any);
    newPrimitivesSince(version?: any);
    newSoundName(name?: any, ignoredSound?: any);
    normalizePoint(snapPoint?: any);
    overlappingPixels(otherSprite?: any);
    ownBlocks();
    palette(category?: string);
    paletteBlockInstance(definition?: CustomBlockDefinition);
    pauseGenericHatBlocks();
    penSize();
    perimeter(aStage?: any);
    perpetuate();
    perpetuateAndEdit();
    playFreq(hz?: any);
    positionTalkBubble();
    prepareToBeGrabbed(hand?: HandMorph);
    projectionSnap();
    prune();
    reactToDropOf(morph?: any, hand?: any);
    receiveUserInteraction(interaction?: string, rightAway?: any, threadSafe?: any);
    recordLayers();
    recordUserEdit();
    refreshInheritedAttribute(aName?: any);
    release();
    remove();
    removeClone();
    removeHighlight();
    removeSpecimen(another?: any);
    renameVariable(oldName?: any, newName?: any, isGlobal?: any, everywhere?: any);
    render(ctx?: CanvasRenderingContext2D);
    replaceDoubleDefinitionsFor(definition?: any);
    reportColorIsTouchingColor(thisColor?: any, thatColor?: any);
    reportCostumes();
    reportPenTrailsAsCostume();
    reportShown();
    reportSounds();
    reportThreadCount();
    reportTouchingColor(aColor?: any);
    reporterize(expressionString?: any);
    restoreLayers();
    rootForGrab();
    rotationCenter();
    scriptsOnlyXML();
    searchBlocks(searchString?: any, types?: any, varNames?: any, scriptFocus?: any);
    setBackgroundColor(aColor?: any);
    setCenter(aPoint?: any, justMe?: any);
    setColor(aColor?: any);
    setColorDimension(idx?: any, num?: any);
    setColorRGBA(dta?: any);
    setEffect(effect?: any, value?: any);
    setExemplar(another?: any, enableError?: any);
    setHeading(degrees?: any, noShadow?: any);
    setName(string?: any);
    setPan(num?: any, noShadow?: any);
    setPenDown(bool?: any, noShadow?: any);
    setPivot(worldCoordinate?: any);
    setPosition(aPoint?: Point, justMe?: any);
    setRotationCenter(absoluteCoordinate?: any);
    setRotationX(absoluteX?: any);
    setRotationY(absoluteY?: any);
    setScale(percentage?: any, noShadow?: any);
    setSize(size?: any);
    setVisibility(bool?: any, noShadow?: any);
    setVolume(num?: any, noShadow?: any);
    setXPosition(num?: any);
    setYPosition(num?: any);
    shadowAllAttributes();
    shadowAllMethods();
    shadowAllVars();
    shadowAttribute(aName?: string);
    shadowVar(name?: any, value?: any);
    shadowedAttributes();
    show();
    showOnStage();
    showingVariableWatcher(varName?: string, isGlobal?: boolean);
    showingWatcher(selector?: string);
    silentGotoXY(x?: any, y?: any, justMe?: any);
    snapPoint(aPoint?: any);
    specimens();
    stopFreq();
    stopTalking();
    synchScriptsFrom(xml?: any);
    talkBubble();
    thumbnail(extentPoint?: Point, recycleMe?: HTMLCanvasElement, noCorpse?: any);
    toXML(serializer?: SnapSerializer);
    toXMLString();
    toggleHighlight();
    toggleInheritanceForAttribute(aName?: any);
    toggleInheritedVariable(vName?: any);
    toggleVariableWatcher(varName?: string, isGlobal?: boolean);
    toggleWatcher(selector?: any, label?: any, color?: any);
    turn(degrees?: any);
    turnLeft(degrees?: any);
    unflashScope(varName?: any, isGlobal?: any);
    up();
    updatePropagationCache();
    userMenu();
    usesBlockInstance(definition?: any, forRemoval?: any, skipGlobals?: any, skipBlocks?: any);
    variableBlock(varName?: string, isLocalTemplate?: any);
    visibleScopeFor(varName?: any, isGlobal?: any);
    wantsDropOf(morph?: any);
    watcherFor(stage?: StageMorph, selector?: string);
    wearCostume(costume?: any, noShadow?: any);
    worldPoint(aSnapPoint?: any);
    write(text?: any, size?: any);
    xCenter();
    xLeft();
    xPosition();
    xRight();
    yBottom();
    yCenter();
    yPosition();
    yTop();
}

export class StageHandleMorph extends Morph {
    color: any;
    isDraggable: any;
    target: any;
    userState: any;

    constructor(target?: any);
    fixLayout();
    init(target?: any);
    mouseDoubleClick();
    mouseDownLeft(pos?: any);
    mouseEnter();
    mouseLeave();
    render(ctx?: any);
    renderOn(ctx?: any, color?: any, shadowColor?: any);
}

export class StageMorph extends FrameMorph {
    acceptsDrops: boolean;
    activeSounds: any[];
    cachedColorDimensions: any[];
    cachedPenTrailsMorph: any;
    categoriesCache: Object;
    cloneCount: number;
    continuousProjection: boolean;
    costume: any;
    costumes: List;
    customBlocks: any[];
    dimensions: Point;
    enableCustomHatBlocks: boolean;
    freqPlayer: any;
    gainNode: any;
    getProjectionImage: any;
    globalBlocks: any[];
    graphicsValues: Object;
    instrument: any;
    isCachingImage: boolean;
    isFastTracked: boolean;
    isThreadSafe: boolean;
    keysPressed: Object;
    lastAnswer: string;
    lastMessage: string;
    lastWatcherUpdate: number;
    messageCallbacks: Object;
    microphone: Microphone;
    mirrorVideo: boolean;
    name: string;
    paletteCache: Object;
    pan: number;
    pannerNode: any;
    primitivesCache: Object;
    projectionCanvas: any;
    projectionSource: any;
    projectionTransparency: number;
    remixID: any;
    scale: number;
    scripts: ScriptsMorph;
    sounds: List;
    stopProjectionSource: any;
    tempo: number;
    threads: ThreadManager;
    timerStart: number;
    trailsCanvas: HTMLCanvasElement;
    trailsLog: any[];
    variables: VariableFrame;
    version: number;
    videoMotion: any;
    volume: number;
    watcherUpdateFrequency: number;
    worldMap: WorldMap;

    addCostume(costume?: any);
    addSound(audio?: any, name?: any);
    addVariable(name?: any, isGlobal?: any);
    allBlockInstances(definition?: any);
    allBlockInstancesInData(definition?: any);
    allBlockInvocationsInData(oldSpec?: any, receiver?: any);
    allBlocks(valuesOnly?: any);
    allContextsInvoking(oldSpec?: any, receiver?: any);
    allContextsUsing(definition?: any);
    allDependentInvocationsOf(aSpec?: any);
    allEditorBlockInstances(definition?: any, spec?: any);
    allGenericHatBlocks();
    allGlobalVariableNames(sorted?: any, all?: any);
    allHatBlocksFor(message?: string);
    allHatBlocksForInteraction(interaction?: string);
    allHatBlocksForKey(key?: any);
    allHatBlocksForUserEdit(spriteName?: string);
    allIndependentInvocationsOf(aSpec?: any);
    allInvocationsOf(aSpec?: any);
    allLocalBlockInstances(definition?: any);
    allLocalVariableNames(sorted?: any, all?: any);
    allMessageNames();
    allPaletteBlocks();
    allScripts();
    allSendersOf(message?: any, receiverName?: any, known?: any);
    allSpecimens();
    applyGraphicsEffects(canvas?: any);
    audioContext();
    blitOn(target?: any, mask?: any);
    blockForSelector(selector?: any, setDefaults?: any);
    blockTemplates();
    blocksMatching(searchString?: any, strictly?: any, types?: any, varNames?: any);
    categoryText(category?: any);
    changeBlockVisibility(aBlock?: any, hideIt?: any, quick?: any);
    changeColorDimension(idx?: any, delta?: any);
    changeColorRGBA(dta?: any);
    changeEffect(effect?: any, value?: any);
    changePan(delta?: any);
    changeTempo(delta?: any);
    changeVolume(delta?: any);
    clear();
    clearEffects();
    clearPenTrails();
    clearProjectionLayer();
    constructor(globals?: any);
    createClone();
    customBlockTemplatesForCategory(category?: any, includeHidden?: any);
    customPaletteButton(descriptor?: any);
    deletableVariableNames();
    deleteAllBlockInstances(definition?: any);
    deleteVariable(varName?: any, isGlobal?: any);
    deleteVariableButton();
    deleteVariableWatcher(varName?: any, isGlobal?: any);
    devModeText();
    developersMenu();
    doPlaySound(name?: any);
    doScreenshot(imgSource?: any, data?: any);
    doSwitchToCostume(id?: any, noShadow?: any);
    doWearNextCostume();
    doWearPreviousCostume();
    doubleDefinitionsFor(definition?: any);
    drawOn(ctx?: CanvasRenderingContext2D, rect?: Rectangle);
    edit();
    editScripts();
    emptyCategories();
    exportTrailsLogAsSVG();
    fancyThumbnail(extentPoint?: Point, excludedSprite?: any, nonRetina?: boolean, recycleMe?: any, noWatchers?: any);
    findVariableWatcher(varName?: any, isGlobal?: any);
    fireChangeOfSceneEvent(message?: any, data?: any);
    fireGreenFlagEvent();
    fireKeyEvent(key?: any);
    fireUserEditEvent(spriteName?: string, details?: any[], timestamp?: number);
    flashScope(varName?: any, isGlobal?: any);
    freshPalette(category?: any);
    fullImage();
    getColorDimension(idx?: any);
    getCostumeIdx();
    getEffect(effect?: any);
    getGainNode();
    getGhostEffect();
    getLastAnswer();
    getLastMessage();
    getLocalMethod(spec?: any);
    getMethod(spec?: any);
    getPan();
    getPannerNode();
    getPenAttribute(attrib?: any);
    getPixelColor(aPoint?: any);
    getPrimitiveTemplates(category?: any);
    getTempo();
    getTimer();
    getVideoImage();
    getVolume();
    globalBlocksSending(message?: any, receiverName?: any);
    globalVariables();
    graphicsChanged();
    hasGenericHatBlocks();
    hasPrimitiveCategories();
    helpMenu();
    hide();
    inheritedBlocks();
    inheritedVariableNames();
    inheritsAttribute();
    init(globals?: any);
    inspectKeyEvent(event?: any);
    isDisablingBlock(aBlock?: any);
    isHidingBlock(aBlock?: any);
    makeBlock();
    makeBlockButton(category?: any);
    makeVariableButton();
    mouseClickLeft();
    mouseDownLeft();
    mouseEnter();
    mouseLeave();
    mouseScroll(y?: any);
    moveBy(delta?: any);
    neighbors(aStage?: any);
    newClone();
    newCostumeName(name?: any, ignoredCostume?: any);
    newSoundName(name?: any, ignoredSound?: any);
    normalizePoint(snapPoint?: any);
    ownBlocks();
    palette(category?: any);
    paletteBlockInstance(definition?: any);
    pauseAllActiveSounds();
    pauseGenericHatBlocks();
    penTrails();
    penTrailsMorph();
    perimeter(aStage?: any);
    playFreq(hz?: any);
    processKeyDown(event?: any);
    processKeyEvent(event?: KeyboardEvent, action?: Function);
    processKeyPress(event?: any);
    processKeyUp(event?: KeyboardEvent);
    projectionLayer();
    projectionSnap(target?: any);
    reactToDropOf(morph?: SpriteMorph, hand?: HandMorph);
    receiveUserInteraction(interaction?: string, rightAway?: any, threadSafe?: any);
    recordUserEdit();
    removeAllClones();
    removePressedKey(key?: string);
    renameVariable(oldName?: any, newName?: any, isGlobal?: any, everywhere?: any);
    render(ctx?: any);
    replaceDoubleDefinitionsFor(definition?: any);
    reportCostumes();
    reportMouseX();
    reportMouseY();
    reportPenTrailsAsCostume();
    reportShown();
    reportSounds();
    reportThreadCount();
    reporterize(expressionString?: any);
    resetTimer();
    resumeAllActiveSounds();
    runStopScripts();
    scriptsOnlyXML();
    searchBlocks(searchString?: any, types?: any, varNames?: any, scriptFocus?: any);
    setBackgroundColor(aColor?: any);
    setColor(aColor?: any);
    setColorDimension(idx?: any, num?: any);
    setColorRGBA(dta?: any);
    setEffect(effect?: any, value?: any);
    setName(string?: any);
    setPan(num?: any, noShadow?: any);
    setScale(number?: number);
    setTempo(bpm?: any);
    setVolume(num?: any, noShadow?: any);
    shadowAttribute();
    show();
    showAll();
    showingVariableWatcher(varName?: any, isGlobal?: any);
    showingWatcher(selector?: any);
    snapPoint(aPoint?: any);
    specimens();
    startVideo();
    step();
    stepGenericConditions(stopAll?: any);
    stopAllActiveSounds();
    stopFreq();
    stopProjection();
    stopVideo();
    synchScriptsFrom(xml?: any);
    thumbnail(extentPoint?: Point, recycleMe?: any, noWatchers?: any);
    toSpriteXML(serializer?: any);
    toXML(serializer?: SnapSerializer);
    toXMLString();
    toggleVariableWatcher(varName?: any, isGlobal?: any);
    toggleWatcher(selector?: any, label?: any, color?: any);
    trailsLogAsSVG();
    unflashScope(varName?: any, isGlobal?: any);
    updateProjection();
    userMenu();
    usesBlockInstance(definition?: any, forRemoval?: any, skipGlobals?: any, skipBlocks?: any);
    variableBlock(varName?: any, isLocalTemplate?: any);
    visibleScopeFor(varName?: any, isGlobal?: any);
    wantsDropOf(aMorph?: SpriteMorph);
    watcherFor(stage?: any, selector?: any);
    watchers(leftPos?: number);
    wearCostume(costume?: any, noShadow?: any);
    worldPoint(aSnapPoint?: any);
    xCenter();
    xLeft();
    xRight();
    yBottom();
    yCenter();
    yTop();
}

export class StagePickerItemMorph extends MenuItemMorph {
    action: any;
    color: any;
    doubleClickAction: any;
    environment: any;
    fontSize: any;
    fontStyle: any;
    highlightColor: any;
    hint: any;
    label: any;
    labelBold: any;
    labelColor: any;
    labelItalic: any;
    labelString: any;
    pressColor: any;
    scale: any;
    schedule: any;
    shortcut: any;
    shortcutString: any;
    target: any;
    userState: any;

    constructor(target?: any, action?: any, labelString?: any, fontSize?: any, fontStyle?: any, environment?: any, hint?: any, color?: any, bold?: any, italic?: any, doubleClickAction?: any, shortcut?: any, scale?: any);
    createLabelString(string?: any);
    popUpSubmenu();
}

export class StagePickerMorph extends MenuMorph {
    answer: any;
    isDone: any;
    scale: any;

    addItem(labelString?: any, action?: any, hint?: any, color?: any, bold?: any, italic?: any, doubleClickAction?: any, shortcut?: any, verbatim?: any);
    adjustWidths();
    closeSubmenu();
    constructor(options?: any);
    createItems(scale?: any);
    createLabel();
    dataRepresentation(data?: any);
    destroy();
    init(options?: any);
    isLeftQuote(options?: any);
    isRightQuote(options?: any);
    isShortcut(key?: any);
    isSubmenu(options?: any);
    maxWidth();
    popup(stage?: any, pos?: any);
    rootMenu();
}

export class StagePrompterMorph extends BoxMorph {
    answer: any;
    button: any;
    color: any;
    inputField: any;
    isDone: any;
    label: any;

    accept();
    constructor(question?: any);
    fixLayout();
    init(question?: any);
    mouseClickLeft();
}

export class StringFieldMorph extends FrameMorph {
    acceptsDrops: boolean;
    color: Color;
    defaultContents: string;
    fontSize: number;
    fontStyle: string;
    isBold: boolean;
    isEditable: boolean;
    isItalic: boolean;
    isNumeric: boolean;
    minWidth: number;
    text: StringMorph;

    constructor(defaultContents?: any, minWidth?: any, fontSize?: any, fontStyle?: any, bold?: any, italic?: any, isNumeric?: any);
    createText();
    init(defaultContents?: string, minWidth?: number, fontSize?: number, fontStyle?: string, bold?: boolean, italic?: boolean, isNumeric?: boolean);
    mouseClickLeft(pos?: any);
    string();
}

export class StringMorph extends Morph {
    blanksColor: Color;
    color: Color;
    currentlySelecting: boolean;
    enableLinks: boolean;
    endMark: number;
    fontName: string;
    fontSize: number;
    fontStyle: string;
    isBold: boolean;
    isEditable: boolean;
    isItalic: boolean;
    isNumeric: boolean;
    isPassword: boolean;
    isScrollable: boolean;
    isShowingBlanks: boolean;
    markedBackgoundColor: Color;
    markedTextColor: Color;
    shadowColor: Color;
    shadowOffset: Point;
    startMark: number;
    text: string;

    clearSelection();
    constructor(text?: any, fontSize?: any, fontStyle?: any, bold?: any, italic?: any, isNumeric?: any, shadowOffset?: any, shadowColor?: any, color?: any, fontName?: any);
    deleteSelection();
    developersMenu();
    disableSelecting();
    downFrom(slot?: any);
    edit();
    enableSelecting();
    endOfLine();
    fixLayout(justMe?: boolean);
    font();
    getShadowRenderColor();
    init(text?: string, fontSize?: number, fontStyle?: string, bold?: boolean, italic?: boolean, isNumeric?: boolean, shadowOffset?: Point, shadowColor?: Color, color?: Color, fontName?: string);
    mouseClickLeft(pos?: Point);
    mouseDoubleClick(pos?: Point);
    mouseDownLeft(pos?: Point);
    nextWordFrom(aSlot?: any);
    numericalSetters();
    password(letter?: any, length?: any);
    previousWordFrom(aSlot?: any);
    rawHeight();
    render(ctx?: CanvasRenderingContext2D);
    renderWithBlanks(ctx?: CanvasRenderingContext2D, startX?: number, y?: number);
    selectAll();
    selectBetweenWordsAt(slot?: any);
    selectWordAt(slot?: any);
    selection();
    selectionStartSlot();
    setFontSize(size?: any);
    setSansSerif();
    setSerif();
    setText(size?: any);
    shiftClick(pos?: any);
    slotAt(aPoint?: Point);
    slotPosition(slot?: number);
    startOfLine();
    toString();
    toggleIsDraggable();
    toggleIsPassword();
    toggleItalic();
    toggleShowBlanks();
    toggleWeight();
    upFrom(slot?: any);
}

export class SVG_Costume extends Costume {
    contents: any;
    loaded: any;
    name: any;
    rotationCenter: any;
    shapes: any;
    version: any;

    constructor(svgImage?: any, name?: any, rotationCenter?: any);
    copy();
    edit(aWorld?: any, anIDE?: any, isnew?: any, oncancel?: any, onsubmit?: any);
    parseShapes();
    rasterized();
    shrinkToFit(extentPoint?: any);
    toString();
}

export class SymbolMorph extends Morph {
    backgroundColor: any;
    color: Color;
    isProtectedLabel: boolean;
    isReadOnly: boolean;
    name: string;
    shadowColor: Color;
    shadowOffset: Point;
    size: number;

    constructor(name?: any, size?: any, color?: any, shadowOffset?: any, shadowColor?: any, bg?: any);
    fixLayout();
    getShadowRenderColor();
    init(name?: string, size?: number, color?: any, shadowOffset?: any, shadowColor?: any, bg?: any);
    render(ctx?: CanvasRenderingContext2D);
    renderShape(ctx?: CanvasRenderingContext2D, aColor?: Color);
    renderSymbolArrowDown(ctx?: any, color?: any);
    renderSymbolArrowDownOutline(ctx?: any, color?: any);
    renderSymbolArrowDownThin(ctx?: any, color?: any);
    renderSymbolArrowLeft(ctx?: any, color?: any);
    renderSymbolArrowLeftOutline(ctx?: any, color?: any);
    renderSymbolArrowLeftRightThin(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolArrowLeftThin(ctx?: any, color?: any);
    renderSymbolArrowRight(ctx?: any, color?: any);
    renderSymbolArrowRightOutline(ctx?: any, color?: any);
    renderSymbolArrowRightThin(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolArrowUp(ctx?: any, color?: any);
    renderSymbolArrowUpDownThin(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolArrowUpOutline(ctx?: any, color?: any);
    renderSymbolArrowUpThin(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolBrush(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolCamera(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolCheckedBox(ctx?: any, color?: any);
    renderSymbolCircle(ctx?: any, color?: any);
    renderSymbolCircleSolid(ctx?: any, color?: any);
    renderSymbolClosedBrushPath(ctx?: any, color?: any);
    renderSymbolCloud(ctx?: any, color?: any);
    renderSymbolCloudGradient(ctx?: any, color?: any);
    renderSymbolCloudOutline(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolCross(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolCrosshairs(ctx?: any, color?: any);
    renderSymbolEraser(ctx?: any, color?: any);
    renderSymbolFile(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolFlag(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolFlash(ctx?: any, color?: any);
    renderSymbolFlipHorizontal(ctx?: any, color?: any);
    renderSymbolFlipVertical(ctx?: any, color?: any);
    renderSymbolFootprints(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolFullScreen(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolGearBig(ctx?: any, color?: any);
    renderSymbolGearPartial(ctx?: any, color?: any);
    renderSymbolGears(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolGlobe(ctx?: any, color?: any, detailed?: any);
    renderSymbolGlobeBig(ctx?: any, color?: any);
    renderSymbolGrow(ctx?: any, color?: any);
    renderSymbolKeyboard(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolKeyboardFilled(ctx?: any, color?: any);
    renderSymbolLine(ctx?: any, color?: any);
    renderSymbolList(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolLocation(ctx?: any, color?: any);
    renderSymbolLoop(ctx?: any, aColor?: any);
    renderSymbolMagnifierOutline(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolMagnifyingGlass(ctx?: any, color?: any);
    renderSymbolNormalScreen(ctx?: any, color?: any);
    renderSymbolNormalStage(ctx?: any, color?: any);
    renderSymbolNotes(ctx?: any, color?: any);
    renderSymbolOctagon(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolOctagonOutline(ctx?: any, color?: any);
    renderSymbolPaintbucket(ctx?: any, color?: any);
    renderSymbolPause(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolPipette(ctx?: any, color?: any);
    renderSymbolPointRight(ctx?: any, color?: any);
    renderSymbolPoster(ctx?: any, color?: any);
    renderSymbolRectangle(ctx?: any, color?: any);
    renderSymbolRectangleSolid(ctx?: any, color?: any);
    renderSymbolRobot(ctx?: any, color?: any);
    renderSymbolSelection(ctx?: any, color?: any);
    renderSymbolShrink(ctx?: any, color?: any);
    renderSymbolSmallStage(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolSpeechBubble(ctx?: any, color?: any);
    renderSymbolSpeechBubbleOutline(ctx?: any, color?: any);
    renderSymbolStepForward(ctx?: any, color?: any);
    renderSymbolStop(ctx?: any, color?: any);
    renderSymbolStorage(ctx?: any, color?: any);
    renderSymbolTick(ctx?: any, color?: any);
    renderSymbolTrash(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolTrashFull(ctx?: any, color?: any);
    renderSymbolTurnAround(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolTurnBack(ctx?: CanvasRenderingContext2D, aColor?: Color);
    renderSymbolTurnForward(ctx?: any, aColor?: any);
    renderSymbolTurnLeft(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolTurnRight(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolTurtle(ctx?: CanvasRenderingContext2D, color?: Color);
    renderSymbolTurtleOutline(ctx?: any, color?: any);
    renderSymbolVerticalEllipsis(ctx?: CanvasRenderingContext2D, color?: Color);
    setExtent(aPoint?: any);
    setLabelColor(textColor?: Color, shadowColor?: Color, shadowOffset?: Point);
    symbolWidth();
    toString();
}

export class SyntaxElementMorph extends Morph {
    cachedClr: string;
    cachedClrBright: string;
    cachedClrDark: string;
    cachedInputs: any[];
    cachedNormalColor: any;
    defaults: any[];
    isStatic: boolean;

    allEmptySlots();
    allInputs();
    bright();
    constructor();
    dark();
    debugCachedInputs();
    doWithAlpha(alpha?: number, callback?: Function);
    elementsAtLOC(definitions?: any);
    evaluate();
    exportPictureWithResult(aBubble?: any);
    fixBlockColor(nearestBlock?: BlockMorph, isForced?: boolean);
    fixHighlight();
    fixLayout();
    flash(aColor?: any);
    getVarNamesDict();
    init();
    inputs();
    isEmptySlot();
    isLocked();
    isObjInputFragment();
    isVertical();
    labelPart(spec?: string);
    mappedCode(definitions?: any);
    methodIconExtent();
    parts();
    reactToGrabOf(grabbedMorph?: any);
    replaceInput(oldArg?: InputSlotMorph, newArg?: ReporterBlockMorph);
    revertToDefaultInput(arg?: any, noValues?: any);
    revertToEmptyInput(arg?: any);
    selectForEdit();
    setColor(aColor?: Color);
    setLabelColor(textColor?: Color, shadowColor?: Color, shadowOffset?: Point);
    setScale(num?: any);
    showBubble(value?: number, exportPic?: any, target?: SpriteMorph);
    tagExitBlocks(stopTag?: any, isCommand?: any);
    topBlock();
    unflash();
}

export class Table extends SnapType {
    colCount: any;
    colNames: any;
    contents: any;
    lastChanged: any;
    rowCount: any;
    rowNames: any;

    addCol(array?: any, name?: any);
    addRow(array?: any, name?: any);
    changed();
    col(col?: any);
    colName(col?: any);
    cols();
    columnNames();
    constructor(cols?: any, rows?: any);
    demo(aWorld?: any);
    fillWithTestData();
    get(col?: any, row?: any);
    row(row?: any);
    rowName(row?: any);
    rows();
    set(data?: any, col?: any, row?: any);
    setColName(col?: any, name?: any);
    setColNames(array?: any);
    setCols(colsArray?: any, colNames?: any, rowNames?: any);
    setRowName(row?: any, name?: any);
    setRowNames(array?: any);
    setRows(rowsArray?: any, colNames?: any, rowNames?: any);
    toList();
}

export class TableCellMorph extends Morph {
    data: any;
    isLabel: any;
    labelString: any;

    constructor(data?: any, extent?: any, isLabel?: any);
    dataRepresentation(dta?: any);
    getData();
    init(data?: any, extent?: any, isLabel?: any);
    isOvershooting();
    listSymbol();
    mouseDoubleClick(pos?: any);
    mouseEnter();
    mouseLeave();
    raggedBoxPath(context?: any);
    render(ctx?: any);
    selectContextForEdit();
    selectCostumeForEdit();
    selectForEdit();
    selectSoundForEdit();
    setData(data?: any, extent?: any);
    shouldBeList();
}

export class TableDialogMorph extends DialogBoxMorph {
    data: any;
    handle: any;
    labelString: any;
    tableView: any;

    buildContents(data?: any, globalColWidth?: any, colWidths?: any, rowHeight?: any);
    constructor(data?: any, globalColWidth?: any, colWidths?: any, rowHeight?: any);
    fixLayout();
    init(data?: any, globalColWidth?: any, colWidths?: any, rowHeight?: any);
    popUp(world?: any);
    setInitialDimensions();
}

export class TableFrameMorph extends Morph {
    bounds: any;
    color: any;
    handle: any;
    tableMorph: any;

    constructor(tableMorph?: any, noResize?: any);
    expand(maxExtent?: any);
    fixLayout();
    init(tableMorph?: any, noResize?: any);
}

export class TableMorph extends FrameMorph {
    colLabelHeight: any;
    colWidths: any;
    columns: any;
    dragAnchor: any;
    globalColWidth: any;
    hBar: any;
    maxStartCol: any;
    maxStartRow: any;
    padding: any;
    resizeAnchor: any;
    resizeCol: any;
    resizeRow: any;
    rowHeight: any;
    rowLabelWidth: any;
    rows: any;
    scrollBarSize: any;
    startCol: any;
    startRow: any;
    table: any;
    tableVersion: any;
    textHeight: any;
    vBar: any;
    wantsUpdate: any;

    buildCells();
    colWidth(col?: any);
    columnAt(relativeX?: any);
    columnsLayout();
    constructor(table?: any, scrollBarSize?: any, extent?: any, startRow?: any, startCol?: any, globalColWidth?: any, colWidths?: any, rowHeight?: any, colLabelHeight?: any, padding?: any);
    drawData(noScrollUpdate?: any);
    fixLayout();
    globalExtent();
    init(table?: any, scrollBarSize?: any, extent?: any, startRow?: any, startCol?: any, globalColWidth?: any, colWidths?: any, rowHeight?: any, colLabelHeight?: any, padding?: any);
    initScrollBars();
    mouseClickLeft(pos?: any);
    mouseDoubleClick(pos?: any);
    mouseDownLeft(pos?: any);
    mouseLeaveDragging(pos?: any);
    mouseScroll(y?: any, x?: any);
    openInDialog();
    render(ctx?: any);
    resetColumns();
    resizeCells(pos?: any);
    rowLabelsWidth();
    scroll(xSteps?: any, ySteps?: any);
    shiftCells(pos?: any);
    show();
    showData(startCol?: any, startRow?: any, noScrollUpdate?: any);
    showListView();
    step();
    update();
    updateScrollBars();
    userMenu();
    visibleRows();
}

export class TabMorph extends ToggleButtonMorph {
    color: Color;
    hasNeutralBackground: boolean;
    hasPreview: boolean;
    highlightColor: Color;
    isPicture: boolean;
    minWidth: any;
    pressColor: Color;
    state: boolean;
    trueStateLabel: any;

    constructor(colors?: any, target?: any, action?: any, labelString?: any, query?: any, environment?: any, hint?: any);
    drawBackground(context?: CanvasRenderingContext2D, color?: Color);
    drawEdges(context?: CanvasRenderingContext2D, color?: Color, topColor?: Color, bottomColor?: Color);
    drawOutline();
    fixLayout();
    query();
    refresh();
}

export class TemplateSlotMorph extends ArgMorph {
    isDraggable: boolean;
    isStatic: boolean;
    labelString: string;

    cSlots();
    constructor(name?: any);
    contents();
    drawEdges(ctx?: CanvasRenderingContext2D);
    evaluate();
    fixLayout();
    flash(aColor?: any);
    flashScope();
    getSpec();
    hasLocationPin();
    init(name?: string);
    mouseEnter();
    mouseLeave();
    outlinePath(ctx?: CanvasRenderingContext2D, inset?: number);
    reactToDropOf(droppedMorph?: any);
    render(ctx?: CanvasRenderingContext2D);
    setContents(aString?: any[] | string);
    template();
    toXML(serializer?: SnapSerializer);
    unflash();
    unflashScope();
    wantsDropOf(aMorph?: any);
}

export class TextMorph extends Morph {
    alignment: string;
    backgroundColor: any;
    color: Color;
    currentlySelecting: boolean;
    enableLinks: boolean;
    endMark: number;
    fontName: string;
    fontSize: number;
    fontStyle: string;
    isBold: boolean;
    isEditable: boolean;
    isItalic: boolean;
    isScrollable: boolean;
    lineSlots: any[];
    lines: any[];
    markedBackgoundColor: Color;
    markedTextColor: Color;
    maxLineWidth: number;
    maxWidth: number;
    receiver: any;
    shadowColor: any;
    shadowOffset: Point;
    startMark: number;
    text: string;
    words: any[];

    clearSelection();
    columnRow(slot?: number);
    constructor(text?: any, fontSize?: any, fontStyle?: any, bold?: any, italic?: any, alignment?: any, width?: any, fontName?: any, shadowOffset?: any, shadowColor?: any);
    deleteSelection();
    developersMenu();
    disableSelecting();
    doIt();
    downFrom(slot?: any);
    edit();
    enableSelecting();
    endOfLine(slot?: any);
    evaluationMenu();
    fixLayout();
    font();
    getShadowRenderColor();
    init(text?: string, fontSize?: number, fontStyle?: string, bold?: boolean, italic?: boolean, alignment?: string, width?: any, fontName?: any, shadowOffset?: any, shadowColor?: any);
    inspectIt();
    mouseClickLeft(pos?: Point);
    mouseDoubleClick(pos?: any);
    mouseDownLeft(pos?: Point);
    nextWordFrom(aSlot?: any);
    numericalSetters();
    parse();
    previousWordFrom(aSlot?: any);
    render(ctx?: CanvasRenderingContext2D);
    selectAll();
    selectAllAndEdit();
    selectBetweenWordsAt(slot?: any);
    selectWordAt(slot?: any);
    selection();
    selectionStartSlot();
    setAlignmentToCenter();
    setAlignmentToLeft();
    setAlignmentToRight();
    setExtent(aPoint?: any);
    setFontSize(size?: number);
    setReceiver(obj?: any);
    setSansSerif();
    setSerif();
    setText(size?: any);
    shiftClick(pos?: any);
    showIt();
    slotAt(aPoint?: Point);
    slotPosition(slot?: number);
    startOfLine(slot?: any);
    toString();
    toggleIsDraggable();
    toggleItalic();
    toggleWeight();
    upFrom(slot?: any);
}

export class TextSlotMorph extends InputSlotMorph {
    choices: any;
    color: any;
    constant: any;
    isNumeric: any;
    isReadOnly: any;
    isUnevaluated: any;
    minWidth: any;
    oldContentsExtent: any;

    constructor(text?: any, isNumeric?: any, choiceDict?: any, isReadOnly?: any);
    contents();
    getSpec();
    init(text?: any, isNumeric?: any, choiceDict?: any, isReadOnly?: any);
    layoutChanged();
}

export class ThreadManager extends SnapType {
    processes: any;
    wantsToPause: any;

    clickFrameFor(block?: ReporterBlockMorph);
    constructor();
    doWhen(block?: any, receiver?: any, stopIt?: any);
    findProcess(block?: BlockMorph, receiver?: SpriteMorph);
    isPaused();
    pauseAll(stage?: any);
    processesForBlock(block?: ReporterBlockMorph, only?: any);
    removeTerminatedProcesses();
    resumeAll(stage?: any);
    startProcess(block?: ReporterBlockMorph, receiver?: SpriteMorph, isThreadSafe?: any, exportResult?: any, callback?: any, isClicked?: boolean, rightAway?: any, atomic?: any, variables?: any);
    step();
    stopAll(excpt?: any);
    stopAllForBlock(aTopBlock?: any);
    stopAllForReceiver(rcvr?: SpriteMorph, excpt?: any);
    stopProcess(block?: any, receiver?: any);
    toggleProcess(block?: ReporterBlockMorph, receiver?: SpriteMorph);
    toggleSingleStepping();
}

export class ToggleButtonMorph extends PushButtonMorph {
    color: Color;
    hasNeutralBackground: boolean;
    hasPreview: boolean;
    highlightColor: Color;
    isPicture: boolean;
    minWidth: number;
    pressColor: Color;
    state: boolean;
    trueStateLabel: SymbolMorph;

    constructor(colors?: any, target?: any, action?: any, labelString?: any, query?: any, environment?: any, hint?: any, minWidth?: any, hasPreview?: any, isPicture?: any);
    createLabel();
    drawEdges(ctx?: CanvasRenderingContext2D, color?: Color, topColor?: Color, bottomColor?: Color);
    fixLayout();
    getPressRenderColor();
    init(colors?: any[], target?: Morph, action?: Function | string, labelString?: any[] | string | SymbolMorph, query?: Function, environment?: any, hint?: Function | string, minWidth?: any, hasPreview?: any, isPicture?: any);
    mouseClickLeft();
    mouseDownLeft();
    mouseEnter();
    mouseLeave();
    previewPath(ctx?: CanvasRenderingContext2D, radius?: number, inset?: number);
    refresh();
    render(ctx?: CanvasRenderingContext2D);
    trigger();
    updateLabelColors();
}

export class ToggleElementMorph extends TriggerMorph {
    action: any;
    builder: any;
    captionString: any;
    color: any;
    element: any;
    environment: any;
    hint: any;
    labelAlignment: any;
    query: any;
    state: any;
    target: any;

    constructor(target?: any, action?: any, element?: any, query?: any, environment?: any, hint?: any, builder?: any, labelString?: any);
    createLabel();
    fixLayout();
    init(target?: any, action?: any, element?: any, query?: any, environment?: any, hint?: any, builder?: any, labelString?: any);
    mouseClickLeft();
    mouseDownLeft();
    mouseEnter();
    mouseLeave();
    refresh();
    render(ctx?: any);
    setColor(aColor?: any);
    trigger();
}

export class ToggleMorph extends PushButtonMorph {
    builder: any;
    captionString: string;
    corner: number;
    element: any;
    labelAlignment: string;
    padding: number;
    query: Function;
    state: boolean;
    tick: StringMorph;
    toggleElement: any;

    constructor(style?: any, target?: any, action?: any, labelString?: any, query?: any, environment?: any, hint?: any, element?: any, builder?: any);
    createLabel();
    fixLayout();
    init(style?: string, target?: VariableDialogMorph | Window, action?: Function, labelString?: string, query?: Function, environment?: any, hint?: any, element?: any, builder?: any);
    mouseClickLeft();
    mouseDownLeft();
    mouseLeave();
    refresh();
    trigger();
}

export class TriggerMorph extends Morph {
    action: any;
    color: Color;
    doubleClickAction: any;
    environment: InputSlotMorph;
    fontSize: number;
    fontStyle: string;
    highlightColor: Color;
    hint: any;
    label: Morph;
    labelBold: boolean;
    labelColor: Color;
    labelItalic: boolean;
    labelString: any[] | string | SymbolMorph;
    pressColor: Color;
    schedule: Animation;
    target: any;
    userState: string;

    bubbleHelp(contents?: string);
    constructor(target?: any, action?: any, labelString?: any, fontSize?: any, fontStyle?: any, environment?: any, hint?: any, labelColor?: any, labelBold?: any, labelItalic?: any, doubleClickAction?: any);
    createLabel();
    fixLayout();
    init(target?: Function | Morph, action?: Function | MenuMorph | string, labelString?: string, fontSize?: number, fontStyle?: string, environment?: InputSlotMorph, hint?: string, labelColor?: any, labelBold?: boolean, labelItalic?: boolean, doubleClickAction?: any);
    mouseClickLeft();
    mouseDoubleClick();
    mouseDownLeft();
    mouseEnter();
    mouseLeave();
    popUpbubbleHelp(contents?: any);
    render(ctx?: CanvasRenderingContext2D);
    rootForGrab();
    trigger();
    triggerDoubleClick();
}

export class TurtleIconMorph extends ToggleButtonMorph {
    corner: any;
    isDraggable: any;
    object: any;
    padding: any;
    thumbnail: any;
    version: any;

    constructor(aSpriteOrStage?: any);
    createLabel();
    createThumbnail();
    fixLayout();
    init(aSpriteOrStage?: any);
    query();
    render(ctx?: any);
    userMenu();
}

export class Variable extends SnapType {
    isHidden: any;
    isTransient: any;
    value: any;

    constructor(value?: any, isTransient?: any, isHidden?: any);
    copy();
    toString();
}

export class VariableDialogMorph extends DialogBoxMorph {
    isGlobal: any;
    types: any;

    addTypeButton(action?: any, label?: any, query?: any);
    constructor(target?: any, action?: any, environment?: any);
    createTypeButtons();
    fixLayout();
    getInput();
    init(target?: any, action?: any, environment?: any);
    setType(varType?: any);
}

export class VariableFrame extends SnapType {
    owner: any;
    parentFrame: any;
    vars: any;

    addVar(name?: string, value?: any);
    allNames(upTo?: VariableFrame, includeHidden?: boolean);
    allNamesDict(upTo?: VariableFrame, includeHidden?: boolean);
    changeVar(name?: any, delta?: any, sender?: any);
    constructor(parentFrame?: any, owner?: any);
    copy();
    deleteVar(name?: any);
    find(name?: any);
    fork(names?: any);
    fullCopy();
    getVar(name?: string);
    merge(otherFrame?: any);
    names(includeHidden?: boolean);
    root();
    setVar(name?: any, value?: any, sender?: any);
    silentFind(name?: string);
    toString();
    toXML(serializer?: SnapSerializer);
    variableError(varName?: any);
}

export class VectorEllipse extends VectorShape {
    destination: any;
    origin: any;

    asSVG();
    bounds();
    constructor(borderWidth?: any, borderColor?: any, fillColor?: any, origin?: any, destination?: any);
    containsPoint(aPoint?: any);
    copy();
    drawOn(aCanvasMorph?: any);
    hRadius();
    init(origin?: any, destination?: any);
    toString();
    vRadius();
}

export class VectorLine extends VectorShape {
    destination: any;
    origin: any;

    asSVG();
    constraintPoint(aPoint?: any);
    constructor(borderWidth?: any, borderColor?: any, origin?: any, destination?: any);
    containsPoint(aPoint?: any);
    copy();
    drawOn(aCanvasMorph?: any);
    init(origin?: any, destination?: any);
    setColor(color?: any, isSecondary?: any);
    toString();
}

export class VectorPaintCanvasMorph extends PaintCanvasMorph {
    currentTool: any;
    isCachingImage: any;
    pointBuffer: any;
    settings: any;

    beginEllipse(borderWidth?: any, borderColor?: any, fillColor?: any, origin?: any);
    beginLine(borderWidth?: any, borderColor?: any, origin?: any);
    beginPolygon(borderWidth?: any, borderColor?: any, fillColor?: any, origin?: any, isClosed?: any, isFreeHand?: any);
    beginRectangle(borderWidth?: any, borderColor?: any, fillColor?: any, origin?: any);
    beginSelection(origin?: any);
    beginShape(borderWidth?: any, primaryColor?: any, secondaryColor?: any, pos?: any);
    calculateCanvasCenter();
    clearCanvas();
    constructor(shift?: any);
    drawNew();
    floodfill(sourcepoint?: any);
    init(shift?: any);
    isShiftPressed();
    mouseClickLeft(pos?: any);
    mouseDoubleClick(pos?: any);
    mouseEnter();
    mouseLeave();
    mouseMove(pos?: any);
    pasteAt(position?: any);
    render();
    selectAtPoint(position?: any);
    selectInside(selectionShape?: any);
    selectShapes(shapes?: any);
    shapeAt(position?: any);
    step();
    toolChanged(tool?: any);
    updateAutomaticCenter();
    updateSelection();
}

export class VectorPaintEditorMorph extends PaintEditorMorph {
    clipboard: any;
    currentShape: any;
    history: any;
    labelString: any;
    lastDragPosition: any;
    moving: any;
    originalSelection: any;
    paper: any;
    resizing: any;
    selecting: any;
    selection: any;
    shapes: any;

    buildContents();
    buildEdits();
    buildScaleBox();
    buildToolbox();
    changeSelectionLayer(destination?: any);
    checksum();
    clearSelection();
    constructor();
    convertToBitmap();
    dragSelection(pos?: any);
    getBounds(shapeCollection?: any);
    getSVG();
    init();
    moveSelectionBy(delta?: any);
    ok();
    openIn(world?: any, oldim?: any, oldrc?: any, callback?: any, anIDE?: any, shapes?: any);
    populatePropertiesMenu();
    renderColorSelection(ctx?: any, color?: any);
    resizeSelectionBy(delta?: any);
    selectColor(color?: any, secondary?: any);
    silentMoveBy(delta?: any);
    sortSelection();
    undo();
    updateHistory();
}

export class VectorPolygon extends VectorShape {
    isClosed: any;
    isFreeHand: any;
    isPolygon: any;
    points: any;

    asSVG();
    bounds();
    close();
    constructor(borderWidth?: any, borderColor?: any, fillColor?: any, points?: any, isClosed?: any, isFreeHand?: any);
    containsPoint(aPoint?: any);
    copy();
    drawOn(aCanvasMorph?: any);
    init(points?: any, isClosed?: any, isFreeHand?: any);
    moveBy(delta?: any);
    resizeBy(delta?: any, origin?: any);
    setColor(color?: any, isSecondary?: any);
    toString();
    update(newPoint?: any, constrain?: any);
}

export class VectorRectangle extends VectorShape {
    destination: any;
    origin: any;

    asSVG();
    constructor(borderWidth?: any, borderColor?: any, fillColor?: any, origin?: any, destination?: any);
    copy();
    drawOn(aCanvasMorph?: any);
    height();
    init(origin?: any, destination?: any);
    toString();
    width();
    x();
    y();
}

export class VectorSelection extends VectorRectangle {
    isSelection: any;
    threshold: any;

    constructor(origin?: any, destination?: any);
    cornerAt(aPoint?: any);
    cornerOppositeTo(aPoint?: any);
    corners();
    drawOn(aCanvasMorph?: any);
    init(origin?: any, destination?: any);
}

export class VectorShape extends Object {
    borderColor: any;
    borderWidth: any;
    destination: any;
    fillColor: any;
    image: any;
    isCrosshair: any;
    isPolygon: any;
    isSelection: any;
    origin: any;

    asSVG(tagName?: any);
    bounds();
    constraintPoint(aPoint?: any);
    constructor(borderWidth?: any, borderColor?: any, fillColor?: any);
    containsPoint(aPoint?: any);
    copy(newShape?: any);
    drawOn(aCanvasMorph?: any);
    imageURL();
    init(borderWidth?: any, borderColor?: any, fillColor?: any);
    moveBy(delta?: any);
    resizeBy(delta?: any, origin?: any);
    setBorderWidth(width?: any);
    setColor(color?: any, isSecondary?: any);
    toString();
    update(newPoint?: any, constrain?: any);
}

export class VideoMotion extends SnapType {
    amountScale: any;
    curr: any;
    frameNumber: any;
    height: any;
    imageBuffer: any;
    lastAnalyzedFrame: any;
    motionAmount: any;
    motionDirection: any;
    prev: any;
    threshold: any;
    toDegree: any;
    width: any;
    winSize: any;

    addFrame(imageData?: any);
    constructor(width?: any, height?: any);
    getLocalMotion(aSprite?: any);
    getMotionVector(A2?: any, A1B2?: any, B1?: any, C2?: any, C1?: any);
    getStageMotion();
    reset(width?: any, height?: any);
}

export class WardrobeMorph extends ScrollFrameMorph {
    costumesVersion: any;
    sprite: any;
    spriteVersion: any;

    constructor(aSprite?: any, sliderColor?: any);
    init(aSprite?: any, sliderColor?: any);
    newFromCam();
    paintNew();
    reactToDropOf(icon?: any);
    removeCostumeAt(idx?: any);
    step();
    updateList();
    updateSelection();
    wantsDropOf(morph?: any);
}

export class WatcherMorph extends BoxMorph {
    cellMorph: CellMorph;
    color: Color;
    currentValue: number;
    getter: string;
    isDraggable: boolean;
    isGhosted: boolean;
    labelMorph: StringMorph;
    labelText: string;
    objName: string;
    readoutColor: Color;
    sliderMorph: SliderMorph;
    style: string;
    target: VariableFrame;
    version: number;

    constructor(label?: any, color?: any, target?: any, getter?: any, isHidden?: any);
    fixLayout();
    importData(raw?: any);
    init(label?: string, color?: Color, target?: VariableFrame, getter?: string, isHidden?: any);
    isGlobal(selector?: any);
    isTemporary();
    mouseDoubleClick(pos?: any);
    object();
    parseTxt();
    render(ctx?: CanvasRenderingContext2D);
    rootForGrab();
    setSliderMax(num?: any, noUpdate?: any);
    setSliderMin(num?: any, noUpdate?: any);
    setStyle(style?: any);
    styleLarge();
    styleNormal();
    styleSlider();
    toXML(serializer?: SnapSerializer);
    update();
    updateLabel();
    userMenu();
    userSetSliderMax();
    userSetSliderMin();
}

export class WorldMap extends SnapType {
    api: any;
    canvas: any;
    creditsBG: any;
    creditsTxt: any;
    extent: any;
    lat: any;
    loading: any;
    lon: any;
    position: any;
    tileServers: any;
    tileSize: any;
    zoom: any;

    addCredits();
    constructor(host?: any);
    distanceInKm(lat1?: any, lon1?: any, lat2?: any, lon2?: any);
    initializeCredits();
    latFromSnapY(y?: any);
    latFromTileY(y?: any);
    lonFromSnapX(x?: any);
    lonFromTileX(x?: any);
    panBy(x?: any, y?: any);
    refresh();
    render();
    setHost(host?: any);
    setView(lon?: any, lat?: any);
    setZoom(num?: any);
    snapXfromLon(lon?: any);
    snapYfromLat(lat?: any);
    tileXfromLon(lon?: any);
    tileYfromLat(lat?: any);
    wrapTile(n?: any);
}

export class WorldMorph extends FrameMorph {
    activeHandle: any;
    activeMenu: MenuMorph;
    alpha: number;
    animations: any[];
    bounds: Rectangle;
    broken: any[];
    color: Color;
    currentKey: number;
    cursor: CursorMorph;
    hand: HandMorph;
    isDevMode: boolean;
    isDraggable: boolean;
    isVisible: boolean;
    keyboardFocus: Morph;
    keyboardHandler: HTMLTextAreaElement;
    lastEditedText: Morph;
    stamp: number;
    useFillPage: boolean;
    worldCanvas: HTMLCanvasElement;

    about();
    beginBulkDrop();
    condenseDamages();
    constructor(aCanvas?: any, fillPage?: any);
    contextMenu();
    doOneCycle();
    droppedAudio();
    droppedImage();
    droppedSVG();
    droppedText();
    edit(aStringOrTextMorph?: Morph);
    endBulkDrop();
    fillPage();
    fullDrawOn(aContext?: CanvasRenderingContext2D, aRect?: Rectangle);
    getGlobalPixelColor(point?: Point);
    hideAll();
    init(aCanvas?: any, fillPage?: any);
    initEventListeners();
    initKeyboardHandler();
    initRetina();
    mouseClickLeft();
    mouseClickRight();
    mouseDownLeft();
    mouseDownRight();
    nextTab(editField?: any);
    previousTab(editField?: any);
    resetKeyboardHandler(keepValue?: boolean);
    showAllHiddens();
    slide(aStringOrTextMorph?: any);
    stepAnimations();
    stopEditing();
    toggleBlurredShadows();
    toggleDevMode();
    toggleHolesDisplay();
    togglePreferences();
    updateBroken();
    userCreateMorph();
    wantsDropOf();
}

export class XML_Element extends Node {
    attributes: any;
    contents: any;
    tag: any;

    childNamed(tagName?: any);
    childrenNamed(tagName?: any);
    constructor(tag?: any, contents?: any, parent?: any);
    escape(string?: any, ignoreQuotes?: any);
    init(tag?: any, contents?: any, parent?: any);
    parentNamed(tagName?: any);
    parseStream(stream?: any);
    parseString(string?: any);
    require(tagName?: any, fallback?: any);
    toString(isFormatted?: any, indentationLevel?: any);
    unescape(string?: any);
}

export class XML_Serializer extends SnapType {
    contents: any;
    isCollectingMedia: any;
    isExportingBlocksLibrary: any;
    media: any;
    root: any;

    add(object?: any);
    addMedia(object?: any, mediaID?: any);
    at(integer?: any);
    constructor();
    escape(string?: any, ignoreQuotes?: any);
    flush();
    flushMedia();
    format(string?: any);
    load(xmlString?: any);
    mediaXML(name?: any);
    parse(xmlString?: any, assertVersion?: any);
    serialize(object?: any, forBlocksLibrary?: any);
    store(object?: any, mediaID?: any);
    unescape(string?: any);
}