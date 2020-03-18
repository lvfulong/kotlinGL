@file:kotlinx.cinterop.InteropStubs
@file:Suppress("UNUSED_VARIABLE", "UNUSED_EXPRESSION", "CONFLICTING_OVERLOADS", "RETURN_TYPE_MISMATCH_ON_INHERITANCE", "PROPERTY_TYPE_MISMATCH_ON_INHERITANCE", "VAR_TYPE_MISMATCH_ON_INHERITANCE", "RETURN_TYPE_MISMATCH_ON_OVERRIDE", "WRONG_MODIFIER_CONTAINING_DECLARATION", "PARAMETER_NAME_CHANGED_ON_OVERRIDE", "UNUSED_PARAMETER", "MANY_IMPL_MEMBER_NOT_IMPLEMENTED", "MANY_INTERFACES_MEMBER_NOT_IMPLEMENTED", "EXTENSION_SHADOWED_BY_MEMBER", "REDUNDANT_NULLABLE", "DEPRECATION", "DEPRECATION_ERROR")
package eaglview

import kotlin.native.SymbolName
import kotlinx.cinterop.internal.*
import kotlinx.cinterop.*
import cnames.structs._NSZone
import cnames.structs.__CFString
import kotlin.collections.List
import platform.CoreFoundation.CFDataRef
import platform.CoreFoundation.CFDictionaryRef
import platform.CoreFoundation.CFStringRef
import platform.CoreFoundation.CFURLRef
import platform.CoreGraphics.CGImageRef
import platform.CoreGraphics.CGRect
import platform.Foundation.NSCoder
import platform.UIKit.UIAppearanceContainerProtocol
import platform.UIKit.UITraitCollection
import platform.UIKit.UIView
import platform.UIKit.UIViewMeta
import platform.darwin.OSStatus
import platform.posix.size_t

// NOTE THIS FILE IS AUTO-GENERATED

@ExternalObjCClass
open class EAGLViewMeta : UIViewMeta {
    
    @ObjCMethod("new", "@16@0:8")
    external override fun new(): EAGLView?
    
    @ObjCMethod("allocWithZone:", "@24@0:8^{_NSZone=}16")
    external override fun allocWithZone(zone: CPointer<_NSZone>?): EAGLView?
    
    @ObjCMethod("alloc", "@16@0:8")
    external override fun alloc(): EAGLView?
    
    @ObjCMethod("appearance", "@16@0:8")
    external override fun appearance(): EAGLView
    
    @ObjCMethod("appearanceWhenContainedIn:", "@24@0:8#16")
    external override fun appearanceWhenContainedIn(ContainerClass: UIAppearanceContainerProtocol?, vararg args: Any?): EAGLView
    
    @ObjCMethod("appearanceWhenContainedInInstancesOfClasses:", "@24@0:8@16")
    external override fun appearanceWhenContainedInInstancesOfClasses(containerTypes: List<*>): EAGLView
    
    @ObjCMethod("appearanceForTraitCollection:", "@24@0:8@16")
    external override fun appearanceForTraitCollection(trait: UITraitCollection): EAGLView
    
    @ObjCMethod("appearanceForTraitCollection:whenContainedIn:", "@32@0:8@16#24")
    external override fun appearanceForTraitCollection(trait: UITraitCollection, whenContainedIn: UIAppearanceContainerProtocol?, vararg args: Any?): EAGLView
    
    @ObjCMethod("appearanceForTraitCollection:whenContainedInInstancesOfClasses:", "@32@0:8@16@24")
    external override fun appearanceForTraitCollection(trait: UITraitCollection, whenContainedInInstancesOfClasses: List<*>): EAGLView
    
    protected constructor() {}
}

@ExternalObjCClass
open class EAGLView : UIView {
    
    companion object : EAGLViewMeta(), ObjCClassOf<EAGLView>
    
    @Deprecated("Use constructor instead", ReplaceWith("EAGLView(frame)"), DeprecationLevel.ERROR)
    @ObjCMethod("initWithFrame:", "@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16")
    @CCall.ConsumesReceiver
    @CCall.ReturnsRetained
    external override fun initWithFrame(frame: CValue<CGRect>): EAGLView
    
    @ObjCConstructor("initWithFrame:", true)
    constructor(frame: CValue<CGRect>) {}
    
    @Deprecated("Use constructor instead", ReplaceWith("EAGLView(coder)"), DeprecationLevel.ERROR)
    @ObjCMethod("initWithCoder:", "@24@0:8@16")
    @CCall.ConsumesReceiver
    @CCall.ReturnsRetained
    external override fun initWithCoder(coder: NSCoder): EAGLView?
    
    @ObjCConstructor("initWithCoder:", true)
    constructor(coder: NSCoder) {}
    
    @Deprecated("Use constructor instead", ReplaceWith("EAGLView()"), DeprecationLevel.ERROR)
    @ObjCMethod("init", "@16@0:8")
    @CCall.ConsumesReceiver
    @CCall.ReturnsRetained
    external override fun init(): EAGLView?
    
    @ObjCConstructor("init", false)
    constructor() {}
}

@CCall("knifunptr_eaglview0_CGAnimateImageAtURLWithBlock")
external fun CGAnimateImageAtURLWithBlock(url: CFURLRef?, options: CFDictionaryRef?, block: CGImageSourceAnimationBlock?): OSStatus

@CCall("knifunptr_eaglview1_CGAnimateImageDataWithBlock")
external fun CGAnimateImageDataWithBlock(data: CFDataRef?, options: CFDictionaryRef?, block: CGImageSourceAnimationBlock?): OSStatus

val kCGImageAnimationStartIndex: CFStringRef?
    get() = interpretCPointer<__CFString>(kniBridge0())

val kCGImageAnimationDelayTime: CFStringRef?
    get() = interpretCPointer<__CFString>(kniBridge1())

val kCGImageAnimationLoopCount: CFStringRef?
    get() = interpretCPointer<__CFString>(kniBridge2())

typealias CGImageSourceAnimationBlockVar = ObjCBlockVar<CGImageSourceAnimationBlock>

typealias CGImageSourceAnimationBlock = ((size_t, CGImageRef?, CPointer<BooleanVar>?) -> Unit)?


val kCGImageAnimationStatus_ParameterError: CGImageAnimationStatus get() = -22140

val kCGImageAnimationStatus_CorruptInputImage: CGImageAnimationStatus get() = -22141

val kCGImageAnimationStatus_UnsupportedFormat: CGImageAnimationStatus get() = -22142

val kCGImageAnimationStatus_IncompleteInputImage: CGImageAnimationStatus get() = -22143

val kCGImageAnimationStatus_AllocationFailure: CGImageAnimationStatus get() = -22144

typealias CGImageAnimationStatusVar = IntVarOf<CGImageAnimationStatus>

typealias CGImageAnimationStatus = OSStatus
@SymbolName("eaglview_kniBridge0")
private external fun kniBridge0(): NativePtr
@SymbolName("eaglview_kniBridge1")
private external fun kniBridge1(): NativePtr
@SymbolName("eaglview_kniBridge2")
private external fun kniBridge2(): NativePtr
