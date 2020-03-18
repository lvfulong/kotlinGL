(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-gl'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-gl'.");
    }
    root['kotlin-gl'] = factory(typeof this['kotlin-gl'] === 'undefined' ? {} : this['kotlin-gl'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Error_init = Kotlin.kotlin.Error_init;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Error_0 = Kotlin.kotlin.Error;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var throwUPAE = Kotlin.throwUPAE;
  var toTypedArray = Kotlin.kotlin.collections.toTypedArray_tmsbgo$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var sliceArray = Kotlin.kotlin.collections.sliceArray_bo8l67$;
  var toTypedArray_0 = Kotlin.kotlin.collections.toTypedArray_rjqryz$;
  var sliceArray_0 = Kotlin.kotlin.collections.sliceArray_l0yznm$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var throwCCE = Kotlin.throwCCE;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var toTypedArray_1 = Kotlin.kotlin.collections.toTypedArray_964n91$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var first = Kotlin.kotlin.collections.first_7wnvza$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  UnsupportedGLError.prototype = Object.create(Error_0.prototype);
  UnsupportedGLError.prototype.constructor = UnsupportedGLError;
  var GL_DEPTH_BUFFER_BIT;
  var GL_STENCIL_BUFFER_BIT;
  var GL_COLOR_BUFFER_BIT;
  var GL_FALSE;
  var GL_TRUE;
  var GL_POINTS;
  var GL_LINES;
  var GL_LINE_LOOP;
  var GL_LINE_STRIP;
  var GL_TRIANGLES;
  var GL_TRIANGLE_STRIP;
  var GL_TRIANGLE_FAN;
  var GL_ZERO;
  var GL_ONE;
  var GL_SRC_COLOR;
  var GL_ONE_MINUS_SRC_COLOR;
  var GL_SRC_ALPHA;
  var GL_ONE_MINUS_SRC_ALPHA;
  var GL_DST_ALPHA;
  var GL_ONE_MINUS_DST_ALPHA;
  var GL_DST_COLOR;
  var GL_ONE_MINUS_DST_COLOR;
  var GL_SRC_ALPHA_SATURATE;
  var GL_FUNC_ADD;
  var GL_BLEND_EQUATION;
  var GL_BLEND_EQUATION_RGB;
  var GL_BLEND_EQUATION_ALPHA;
  var GL_FUNC_SUBTRACT;
  var GL_FUNC_REVERSE_SUBTRACT;
  var GL_BLEND_DST_RGB;
  var GL_BLEND_SRC_RGB;
  var GL_BLEND_DST_ALPHA;
  var GL_BLEND_SRC_ALPHA;
  var GL_CONSTANT_COLOR;
  var GL_ONE_MINUS_CONSTANT_COLOR;
  var GL_CONSTANT_ALPHA;
  var GL_ONE_MINUS_CONSTANT_ALPHA;
  var GL_BLEND_COLOR;
  var GL_ARRAY_BUFFER;
  var GL_ELEMENT_ARRAY_BUFFER;
  var GL_ARRAY_BUFFER_BINDING;
  var GL_ELEMENT_ARRAY_BUFFER_BINDING;
  var GL_STREAM_DRAW;
  var GL_STATIC_DRAW;
  var GL_DYNAMIC_DRAW;
  var GL_BUFFER_SIZE;
  var GL_BUFFER_USAGE;
  var GL_CURRENT_VERTEX_ATTRIB;
  var GL_FRONT;
  var GL_BACK;
  var GL_FRONT_AND_BACK;
  var GL_TEXTURE_2D;
  var GL_CULL_FACE;
  var GL_BLEND;
  var GL_DITHER;
  var GL_STENCIL_TEST;
  var GL_DEPTH_TEST;
  var GL_SCISSOR_TEST;
  var GL_POLYGON_OFFSET_FILL;
  var GL_SAMPLE_ALPHA_TO_COVERAGE;
  var GL_SAMPLE_COVERAGE;
  var GL_NO_ERROR;
  var GL_INVALID_ENUM;
  var GL_INVALID_VALUE;
  var GL_INVALID_OPERATION;
  var GL_OUT_OF_MEMORY;
  var GL_CW;
  var GL_CCW;
  var GL_LINE_WIDTH;
  var GL_ALIASED_POINT_SIZE_RANGE;
  var GL_ALIASED_LINE_WIDTH_RANGE;
  var GL_CULL_FACE_MODE;
  var GL_FRONT_FACE;
  var GL_DEPTH_RANGE;
  var GL_DEPTH_WRITEMASK;
  var GL_DEPTH_CLEAR_VALUE;
  var GL_DEPTH_FUNC;
  var GL_STENCIL_CLEAR_VALUE;
  var GL_STENCIL_FUNC;
  var GL_STENCIL_FAIL;
  var GL_STENCIL_PASS_DEPTH_FAIL;
  var GL_STENCIL_PASS_DEPTH_PASS;
  var GL_STENCIL_REF;
  var GL_STENCIL_VALUE_MASK;
  var GL_STENCIL_WRITEMASK;
  var GL_STENCIL_BACK_FUNC;
  var GL_STENCIL_BACK_FAIL;
  var GL_STENCIL_BACK_PASS_DEPTH_FAIL;
  var GL_STENCIL_BACK_PASS_DEPTH_PASS;
  var GL_STENCIL_BACK_REF;
  var GL_STENCIL_BACK_VALUE_MASK;
  var GL_STENCIL_BACK_WRITEMASK;
  var GL_VIEWPORT;
  var GL_SCISSOR_BOX;
  var GL_COLOR_CLEAR_VALUE;
  var GL_COLOR_WRITEMASK;
  var GL_UNPACK_ALIGNMENT;
  var GL_PACK_ALIGNMENT;
  var GL_MAX_TEXTURE_SIZE;
  var GL_MAX_VIEWPORT_DIMS;
  var GL_SUBPIXEL_BITS;
  var GL_RED_BITS;
  var GL_GREEN_BITS;
  var GL_BLUE_BITS;
  var GL_ALPHA_BITS;
  var GL_DEPTH_BITS;
  var GL_STENCIL_BITS;
  var GL_POLYGON_OFFSET_UNITS;
  var GL_POLYGON_OFFSET_FACTOR;
  var GL_TEXTURE_BINDING_2D;
  var GL_SAMPLE_BUFFERS;
  var GL_SAMPLES;
  var GL_SAMPLE_COVERAGE_VALUE;
  var GL_SAMPLE_COVERAGE_INVERT;
  var GL_NUM_COMPRESSED_TEXTURE_FORMATS;
  var GL_COMPRESSED_TEXTURE_FORMATS;
  var GL_DONT_CARE;
  var GL_FASTEST;
  var GL_NICEST;
  var GL_GENERATE_MIPMAP_HINT;
  var GL_BYTE;
  var GL_UNSIGNED_BYTE;
  var GL_SHORT;
  var GL_UNSIGNED_SHORT;
  var GL_INT;
  var GL_UNSIGNED_INT;
  var GL_FLOAT;
  var GL_FIXED;
  var GL_DEPTH_COMPONENT;
  var GL_ALPHA;
  var GL_RGB;
  var GL_RGBA;
  var GL_LUMINANCE;
  var GL_LUMINANCE_ALPHA;
  var GL_UNSIGNED_SHORT_4_4_4_4;
  var GL_UNSIGNED_SHORT_5_5_5_1;
  var GL_UNSIGNED_SHORT_5_6_5;
  var GL_FRAGMENT_SHADER;
  var GL_VERTEX_SHADER;
  var GL_MAX_VERTEX_ATTRIBS;
  var GL_MAX_VERTEX_UNIFORM_VECTORS;
  var GL_MAX_VARYING_VECTORS;
  var GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS;
  var GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS;
  var GL_MAX_TEXTURE_IMAGE_UNITS;
  var GL_MAX_FRAGMENT_UNIFORM_VECTORS;
  var GL_SHADER_TYPE;
  var GL_DELETE_STATUS;
  var GL_LINK_STATUS;
  var GL_VALIDATE_STATUS;
  var GL_ATTACHED_SHADERS;
  var GL_ACTIVE_UNIFORMS;
  var GL_ACTIVE_UNIFORM_MAX_LENGTH;
  var GL_ACTIVE_ATTRIBUTES;
  var GL_ACTIVE_ATTRIBUTE_MAX_LENGTH;
  var GL_SHADING_LANGUAGE_VERSION;
  var GL_CURRENT_PROGRAM;
  var GL_NEVER;
  var GL_LESS;
  var GL_EQUAL;
  var GL_LEQUAL;
  var GL_GREATER;
  var GL_NOTEQUAL;
  var GL_GEQUAL;
  var GL_ALWAYS;
  var GL_KEEP;
  var GL_REPLACE;
  var GL_INCR;
  var GL_DECR;
  var GL_INVERT;
  var GL_INCR_WRAP;
  var GL_DECR_WRAP;
  var GL_VENDOR;
  var GL_RENDERER;
  var GL_VERSION;
  var GL_EXTENSIONS;
  var GL_NEAREST;
  var GL_LINEAR;
  var GL_NEAREST_MIPMAP_NEAREST;
  var GL_LINEAR_MIPMAP_NEAREST;
  var GL_NEAREST_MIPMAP_LINEAR;
  var GL_LINEAR_MIPMAP_LINEAR;
  var GL_TEXTURE_MAG_FILTER;
  var GL_TEXTURE_MIN_FILTER;
  var GL_TEXTURE_WRAP_S;
  var GL_TEXTURE_WRAP_T;
  var GL_TEXTURE;
  var GL_TEXTURE_CUBE_MAP;
  var GL_TEXTURE_BINDING_CUBE_MAP;
  var GL_TEXTURE_CUBE_MAP_POSITIVE_X;
  var GL_TEXTURE_CUBE_MAP_NEGATIVE_X;
  var GL_TEXTURE_CUBE_MAP_POSITIVE_Y;
  var GL_TEXTURE_CUBE_MAP_NEGATIVE_Y;
  var GL_TEXTURE_CUBE_MAP_POSITIVE_Z;
  var GL_TEXTURE_CUBE_MAP_NEGATIVE_Z;
  var GL_MAX_CUBE_MAP_TEXTURE_SIZE;
  var GL_TEXTURE0;
  var GL_TEXTURE1;
  var GL_TEXTURE2;
  var GL_TEXTURE3;
  var GL_TEXTURE4;
  var GL_TEXTURE5;
  var GL_TEXTURE6;
  var GL_TEXTURE7;
  var GL_TEXTURE8;
  var GL_TEXTURE9;
  var GL_TEXTURE10;
  var GL_TEXTURE11;
  var GL_TEXTURE12;
  var GL_TEXTURE13;
  var GL_TEXTURE14;
  var GL_TEXTURE15;
  var GL_TEXTURE16;
  var GL_TEXTURE17;
  var GL_TEXTURE18;
  var GL_TEXTURE19;
  var GL_TEXTURE20;
  var GL_TEXTURE21;
  var GL_TEXTURE22;
  var GL_TEXTURE23;
  var GL_TEXTURE24;
  var GL_TEXTURE25;
  var GL_TEXTURE26;
  var GL_TEXTURE27;
  var GL_TEXTURE28;
  var GL_TEXTURE29;
  var GL_TEXTURE30;
  var GL_TEXTURE31;
  var GL_ACTIVE_TEXTURE;
  var GL_REPEAT;
  var GL_CLAMP_TO_EDGE;
  var GL_MIRRORED_REPEAT;
  var GL_FLOAT_VEC2;
  var GL_FLOAT_VEC3;
  var GL_FLOAT_VEC4;
  var GL_INT_VEC2;
  var GL_INT_VEC3;
  var GL_INT_VEC4;
  var GL_BOOL;
  var GL_BOOL_VEC2;
  var GL_BOOL_VEC3;
  var GL_BOOL_VEC4;
  var GL_FLOAT_MAT2;
  var GL_FLOAT_MAT3;
  var GL_FLOAT_MAT4;
  var GL_SAMPLER_2D;
  var GL_SAMPLER_CUBE;
  var GL_VERTEX_ATTRIB_ARRAY_ENABLED;
  var GL_VERTEX_ATTRIB_ARRAY_SIZE;
  var GL_VERTEX_ATTRIB_ARRAY_STRIDE;
  var GL_VERTEX_ATTRIB_ARRAY_TYPE;
  var GL_VERTEX_ATTRIB_ARRAY_NORMALIZED;
  var GL_VERTEX_ATTRIB_ARRAY_POINTER;
  var GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING;
  var GL_IMPLEMENTATION_COLOR_READ_TYPE;
  var GL_IMPLEMENTATION_COLOR_READ_FORMAT;
  var GL_COMPILE_STATUS;
  var GL_INFO_LOG_LENGTH;
  var GL_SHADER_SOURCE_LENGTH;
  var GL_SHADER_COMPILER;
  var GL_SHADER_BINARY_FORMATS;
  var GL_NUM_SHADER_BINARY_FORMATS;
  var GL_LOW_FLOAT;
  var GL_MEDIUM_FLOAT;
  var GL_HIGH_FLOAT;
  var GL_LOW_INT;
  var GL_MEDIUM_INT;
  var GL_HIGH_INT;
  var GL_FRAMEBUFFER;
  var GL_RENDERBUFFER;
  var GL_RGBA4;
  var GL_RGB5_A1;
  var GL_RGB565;
  var GL_DEPTH_COMPONENT16;
  var GL_STENCIL_INDEX8;
  var GL_RENDERBUFFER_WIDTH;
  var GL_RENDERBUFFER_HEIGHT;
  var GL_RENDERBUFFER_INTERNAL_FORMAT;
  var GL_RENDERBUFFER_RED_SIZE;
  var GL_RENDERBUFFER_GREEN_SIZE;
  var GL_RENDERBUFFER_BLUE_SIZE;
  var GL_RENDERBUFFER_ALPHA_SIZE;
  var GL_RENDERBUFFER_DEPTH_SIZE;
  var GL_RENDERBUFFER_STENCIL_SIZE;
  var GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE;
  var GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME;
  var GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL;
  var GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE;
  var GL_COLOR_ATTACHMENT0;
  var GL_DEPTH_ATTACHMENT;
  var GL_STENCIL_ATTACHMENT;
  var GL_NONE;
  var GL_FRAMEBUFFER_COMPLETE;
  var GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT;
  var GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT;
  var GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS;
  var GL_FRAMEBUFFER_UNSUPPORTED;
  var GL_FRAMEBUFFER_BINDING;
  var GL_RENDERBUFFER_BINDING;
  var GL_MAX_RENDERBUFFER_SIZE;
  var GL_INVALID_FRAMEBUFFER_OPERATION;
  var INT_BYTE_SIZE;
  var FLOAT_BYTE_SIZE;
  function UnsupportedGLError() {
    Error_init(this);
    this.name = 'UnsupportedGLError';
  }
  UnsupportedGLError.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UnsupportedGLError',
    interfaces: [Error_0]
  };
  function DeviceInfo() {
    DeviceInfo$Companion_getInstance();
  }
  function DeviceInfo$Companion() {
    DeviceInfo$Companion_instance = this;
  }
  DeviceInfo$Companion.prototype.isSupported = function () {
    return true;
  };
  DeviceInfo$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DeviceInfo$Companion_instance = null;
  function DeviceInfo$Companion_getInstance() {
    if (DeviceInfo$Companion_instance === null) {
      new DeviceInfo$Companion();
    }
    return DeviceInfo$Companion_instance;
  }
  DeviceInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeviceInfo',
    interfaces: []
  };
  function gl() {
    gl_instance = this;
    this.glRenderingContext_ri6ep0$_0 = this.glRenderingContext_ri6ep0$_0;
    this.bufferMap_0 = new WebGLMap();
    this.programMap_0 = new WebGLMap();
    this.shaderMap_0 = new WebGLMap();
    this.framebufferMap_0 = new WebGLMap();
    this.renderbufferMap_0 = new WebGLMap();
    this.textureMap_0 = new WebGLMap();
    this.uniformMap_0 = new WebGLMap();
  }
  Object.defineProperty(gl.prototype, 'glRenderingContext_0', {
    get: function () {
      if (this.glRenderingContext_ri6ep0$_0 == null)
        return throwUPAE('glRenderingContext');
      return this.glRenderingContext_ri6ep0$_0;
    },
    set: function (glRenderingContext) {
      this.glRenderingContext_ri6ep0$_0 = glRenderingContext;
    }
  });
  gl.prototype.setContext_tnk6ih$ = function (context) {
    this.glRenderingContext_0 = context;
  };
  gl.prototype.activeTexture_za3lpa$ = function (texture) {
    this.glRenderingContext_0.activeTexture(texture);
  };
  gl.prototype.attachShader_vux9f0$ = function (program, shader) {
    this.glRenderingContext_0.attachShader(this.programMap_0.get_za3lpa$(program), this.shaderMap_0.get_za3lpa$(shader));
  };
  gl.prototype.bindAttribLocation_98i29q$ = function (program, index, name) {
    this.glRenderingContext_0.bindAttribLocation(this.programMap_0.get_za3lpa$(program), index, name);
  };
  gl.prototype.bindBuffer_vux9f0$ = function (target, buffer) {
    this.glRenderingContext_0.bindBuffer(target, this.bufferMap_0.getOrNull_za3lpa$(buffer));
  };
  gl.prototype.bindFramebuffer_vux9f0$ = function (target, framebuffer) {
    this.glRenderingContext_0.bindFramebuffer(target, this.framebufferMap_0.getOrNull_za3lpa$(framebuffer));
  };
  gl.prototype.bindRenderbuffer_vux9f0$ = function (target, renderbuffer) {
    this.glRenderingContext_0.bindRenderbuffer(target, this.renderbufferMap_0.getOrNull_za3lpa$(renderbuffer));
  };
  gl.prototype.bindTexture_vux9f0$ = function (target, texture) {
    this.glRenderingContext_0.bindTexture(target, this.textureMap_0.getOrNull_za3lpa$(texture));
  };
  gl.prototype.blendColor_7b5o5w$ = function (red, green, blue, alpha) {
    this.glRenderingContext_0.blendColor(red, green, blue, alpha);
  };
  gl.prototype.blendEquation_za3lpa$ = function (mode) {
    this.glRenderingContext_0.blendEquation(mode);
  };
  gl.prototype.blendEquationSeparate_vux9f0$ = function (modeRGB, modeAlpha) {
    this.glRenderingContext_0.blendEquationSeparate(modeRGB, modeAlpha);
  };
  gl.prototype.blendFunc_vux9f0$ = function (sfactor, dfactor) {
    this.glRenderingContext_0.blendFunc(sfactor, dfactor);
  };
  gl.prototype.blendFuncSeparate_tjonv8$ = function (sfactorRGB, dfactorRGB, sfactorAlpha, dfactorAlpha) {
    this.glRenderingContext_0.blendFuncSeparate(sfactorRGB, dfactorRGB, sfactorAlpha, dfactorAlpha);
  };
  gl.prototype.bufferData_gxg90h$ = function (target, data, usage) {
    this.glRenderingContext_0.bufferData(target, new Int32Array(toTypedArray(data)), usage);
  };
  gl.prototype.bufferData_coga0j$ = function (target, data, size, usage) {
    this.glRenderingContext_0.bufferData(target, new Int32Array(toTypedArray(sliceArray(data, until(0, size)))), usage);
  };
  gl.prototype.bufferData_mfoo9a$ = function (target, data, usage) {
    this.glRenderingContext_0.bufferData(target, new Float32Array(toTypedArray_0(data)), usage);
  };
  gl.prototype.bufferData_3hvitc$ = function (target, data, size, usage) {
    this.glRenderingContext_0.bufferData(target, new Float32Array(toTypedArray_0(sliceArray_0(data, until(0, size)))), usage);
  };
  gl.prototype.bufferData_z7qf8g$ = function (target, data, usage) {
    throw new UnsupportedGLError();
  };
  gl.prototype.bufferData_3fge6q$ = function (target, data, size, usage) {
    throw new UnsupportedGLError();
  };
  gl.prototype.bufferSubData_267wqe$ = function (target, offset, data) {
    this.glRenderingContext_0.bufferSubData(target, offset.toInt() * 4 | 0, new Int32Array(toTypedArray(data)));
  };
  gl.prototype.bufferSubData_ux82m4$ = function (target, offset, data, size) {
    this.glRenderingContext_0.bufferSubData(target, offset.toInt() * 4 | 0, new Int32Array(toTypedArray(sliceArray(data, until(0, size)))));
  };
  gl.prototype.bufferSubData_c0tagt$ = function (target, offset, data) {
    this.glRenderingContext_0.bufferSubData(target, offset.toInt() * 4 | 0, new Float32Array(toTypedArray_0(data)));
  };
  gl.prototype.bufferSubData_6fq7kf$ = function (target, offset, data, size) {
    this.glRenderingContext_0.bufferSubData(target, offset.toInt() * 4 | 0, new Float32Array(toTypedArray_0(sliceArray_0(data, until(0, size)))));
  };
  gl.prototype.bufferSubData_lz9e3z$ = function (target, offset, data) {
    throw new UnsupportedGLError();
  };
  gl.prototype.bufferSubData_qzba77$ = function (target, offset, data, size) {
    throw new UnsupportedGLError();
  };
  gl.prototype.checkFramebufferStatus_za3lpa$ = function (target) {
    return this.glRenderingContext_0.checkFramebufferStatus(target);
  };
  gl.prototype.clear_za3lpa$ = function (mask) {
    this.glRenderingContext_0.clear(mask);
  };
  gl.prototype.clearColor_7b5o5w$ = function (red, green, blue, alpha) {
    this.glRenderingContext_0.clearColor(red, green, blue, alpha);
  };
  gl.prototype.clearDepthf_mx4ult$ = function (d) {
    this.glRenderingContext_0.clearDepth(d);
  };
  gl.prototype.clearStencil_za3lpa$ = function (s) {
    this.glRenderingContext_0.clearStencil(s);
  };
  gl.prototype.colorMask_nyyhg$ = function (red, green, blue, alpha) {
    this.glRenderingContext_0.colorMask(red, green, blue, alpha);
  };
  gl.prototype.compileShader_za3lpa$ = function (shader) {
    this.glRenderingContext_0.compileShader(this.shaderMap_0.get_za3lpa$(shader));
  };
  gl.prototype.compressedTexImage2D_keqap0$ = function (target, level, internalformat, width, height, border, data) {
    this.glRenderingContext_0.compressedTexImage2D(target, level, internalformat, width, height, border, toUint32Array(data));
  };
  gl.prototype.compressedTexSubImage2D_lmo8j2$ = function (target, level, xoffset, yoffset, width, height, format, data) {
    this.glRenderingContext_0.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, toUint32Array(data));
  };
  gl.prototype.copyTexImage2D_wrdw30$ = function (target, level, internalformat, x, y, width, height, border) {
    this.glRenderingContext_0.copyTexImage2D(target, level, internalformat, x, y, width, height, border);
  };
  gl.prototype.copyTexSubImage2D_wrdw30$ = function (target, level, xoffset, yoffset, x, y, width, height) {
    this.glRenderingContext_0.copyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height);
  };
  gl.prototype.createProgram = function () {
    var tmp$ = this.programMap_0;
    var value = this.glRenderingContext_0.createProgram();
    var checkNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalStateException_init(message.toString());
    }
     else {
      checkNotNull$result = value;
    }
    return tmp$.create_11rb$(checkNotNull$result);
  };
  gl.prototype.createShader_za3lpa$ = function (type) {
    var tmp$ = this.shaderMap_0;
    var value = this.glRenderingContext_0.createShader(type);
    var checkNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalStateException_init(message.toString());
    }
     else {
      checkNotNull$result = value;
    }
    return tmp$.create_11rb$(checkNotNull$result);
  };
  gl.prototype.cullFace_za3lpa$ = function (mode) {
    this.glRenderingContext_0.cullFace(mode);
  };
  gl.prototype.deleteBuffers_q5rwfd$ = function (buffers) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== buffers.length; ++tmp$) {
      var element = buffers[tmp$];
      this.glRenderingContext_0.deleteBuffer(this.bufferMap_0.destroy_za3lpa$(element));
    }
  };
  gl.prototype.deleteFramebuffers_q5rwfd$ = function (framebuffers) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== framebuffers.length; ++tmp$) {
      var element = framebuffers[tmp$];
      this.glRenderingContext_0.deleteFramebuffer(this.framebufferMap_0.destroy_za3lpa$(element));
    }
  };
  gl.prototype.deleteProgram_za3lpa$ = function (program) {
    this.glRenderingContext_0.deleteProgram(this.programMap_0.destroy_za3lpa$(program));
  };
  gl.prototype.deleteRenderbuffers_q5rwfd$ = function (renderbuffers) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== renderbuffers.length; ++tmp$) {
      var element = renderbuffers[tmp$];
      this.glRenderingContext_0.deleteRenderbuffer(this.renderbufferMap_0.destroy_za3lpa$(element));
    }
  };
  gl.prototype.deleteShader_za3lpa$ = function (shader) {
    this.glRenderingContext_0.deleteShader(this.shaderMap_0.destroy_za3lpa$(shader));
  };
  gl.prototype.deleteTextures_q5rwfd$ = function (textures) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== textures.length; ++tmp$) {
      var element = textures[tmp$];
      this.glRenderingContext_0.deleteTexture(this.textureMap_0.destroy_za3lpa$(element));
    }
  };
  gl.prototype.depthFunc_za3lpa$ = function (func) {
    this.glRenderingContext_0.depthFunc(func);
  };
  gl.prototype.depthMask_6taknv$ = function (flag) {
    this.glRenderingContext_0.depthMask(flag);
  };
  gl.prototype.depthRangef_dleff0$ = function (n, f) {
    this.glRenderingContext_0.depthRange(n, f);
  };
  gl.prototype.detachShader_vux9f0$ = function (program, shader) {
    this.glRenderingContext_0.detachShader(this.programMap_0.get_za3lpa$(program), this.shaderMap_0.get_za3lpa$(shader));
  };
  gl.prototype.disable_za3lpa$ = function (cap) {
    this.glRenderingContext_0.disable(cap);
  };
  gl.prototype.disableVertexAttribArray_za3lpa$ = function (index) {
    this.glRenderingContext_0.disableVertexAttribArray(index);
  };
  gl.prototype.drawArrays_qt1dr2$ = function (mode, first, count) {
    this.glRenderingContext_0.drawArrays(mode, first, count);
  };
  gl.prototype.drawElements_aio0fn$ = function (mode, indices) {
    this.glRenderingContext_0.drawElements(mode, indices.length, 5124, 0);
  };
  gl.prototype.enable_za3lpa$ = function (cap) {
    this.glRenderingContext_0.enable(cap);
  };
  gl.prototype.enableVertexAttribArray_za3lpa$ = function (index) {
    this.glRenderingContext_0.enableVertexAttribArray(index);
  };
  gl.prototype.finish = function () {
    this.glRenderingContext_0.finish();
  };
  gl.prototype.flush = function () {
    this.glRenderingContext_0.flush();
  };
  gl.prototype.framebufferRenderbuffer_tjonv8$ = function (target, attachment, renderbuffertarget, renderbuffer) {
    this.glRenderingContext_0.framebufferRenderbuffer(target, attachment, renderbuffertarget, this.renderbufferMap_0.get_za3lpa$(renderbuffer));
  };
  gl.prototype.framebufferTexture2D_4qozqa$ = function (target, attachment, textarget, texture, level) {
    this.glRenderingContext_0.framebufferTexture2D(target, attachment, textarget, this.textureMap_0.get_za3lpa$(texture), level);
  };
  gl.prototype.frontFace_za3lpa$ = function (mode) {
    this.glRenderingContext_0.frontFace(mode);
  };
  gl.prototype.genBuffers_za3lpa$ = function (n) {
    var array = new Int32Array(n);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var tmp$_0 = this.bufferMap_0;
      var value = this.glRenderingContext_0.createBuffer();
      var checkNotNull$result;
      if (value == null) {
        var message = 'Required value was null.';
        throw IllegalStateException_init(message.toString());
      }
       else {
        checkNotNull$result = value;
      }
      array[i] = tmp$_0.create_11rb$(checkNotNull$result);
    }
    return array;
  };
  gl.prototype.generateMipmap_za3lpa$ = function (target) {
    this.glRenderingContext_0.generateMipmap(target);
  };
  gl.prototype.genFramebuffers_za3lpa$ = function (n) {
    var array = new Int32Array(n);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var tmp$_0 = this.framebufferMap_0;
      var value = this.glRenderingContext_0.createFramebuffer();
      var checkNotNull$result;
      if (value == null) {
        var message = 'Required value was null.';
        throw IllegalStateException_init(message.toString());
      }
       else {
        checkNotNull$result = value;
      }
      array[i] = tmp$_0.create_11rb$(checkNotNull$result);
    }
    return array;
  };
  gl.prototype.genRenderbuffers_za3lpa$ = function (n) {
    var array = new Int32Array(n);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var tmp$_0 = this.renderbufferMap_0;
      var value = this.glRenderingContext_0.createRenderbuffer();
      var checkNotNull$result;
      if (value == null) {
        var message = 'Required value was null.';
        throw IllegalStateException_init(message.toString());
      }
       else {
        checkNotNull$result = value;
      }
      array[i] = tmp$_0.create_11rb$(checkNotNull$result);
    }
    return array;
  };
  gl.prototype.genTextures_za3lpa$ = function (n) {
    var array = new Int32Array(n);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var tmp$_0 = this.textureMap_0;
      var value = this.glRenderingContext_0.createTexture();
      var checkNotNull$result;
      if (value == null) {
        var message = 'Required value was null.';
        throw IllegalStateException_init(message.toString());
      }
       else {
        checkNotNull$result = value;
      }
      array[i] = tmp$_0.create_11rb$(checkNotNull$result);
    }
    return array;
  };
  gl.prototype.getActiveAttribSize_za3lpa$ = function (program) {
    var value = this.glRenderingContext_0.getActiveAttrib(this.programMap_0.get_za3lpa$(program), 0);
    var checkNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalStateException_init(message.toString());
    }
     else {
      checkNotNull$result = value;
    }
    return checkNotNull$result.size;
  };
  gl.prototype.getActiveAttrib_vux9f0$ = function (program, index) {
    var value = this.glRenderingContext_0.getActiveAttrib(this.programMap_0.get_za3lpa$(program), index);
    var checkNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalStateException_init(message.toString());
    }
     else {
      checkNotNull$result = value;
    }
    var result = checkNotNull$result;
    return to(result.name, result.type);
  };
  gl.prototype.getActiveUniformSize_za3lpa$ = function (program) {
    var value = this.glRenderingContext_0.getActiveUniform(this.programMap_0.get_za3lpa$(program), 0);
    var checkNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalStateException_init(message.toString());
    }
     else {
      checkNotNull$result = value;
    }
    return checkNotNull$result.size;
  };
  gl.prototype.getActiveUniform_vux9f0$ = function (program, index) {
    var value = this.glRenderingContext_0.getActiveUniform(this.programMap_0.get_za3lpa$(program), index);
    var checkNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalStateException_init(message.toString());
    }
     else {
      checkNotNull$result = value;
    }
    var result = checkNotNull$result;
    return to(result.name, result.type);
  };
  gl.prototype.getAttachedShaders_za3lpa$ = function (program) {
    var value = this.glRenderingContext_0.getAttachedShaders(this.programMap_0.get_za3lpa$(program));
    var checkNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalStateException_init(message.toString());
    }
     else {
      checkNotNull$result = value;
    }
    var result = checkNotNull$result;
    var destination = ArrayList_init(result.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== result.length; ++tmp$) {
      var item = result[tmp$];
      destination.add_11rb$(this.shaderMap_0.search_11rb$(item));
    }
    return toIntArray(destination);
  };
  gl.prototype.getAttribLocation_19mbxw$ = function (program, name) {
    return this.glRenderingContext_0.getAttribLocation(this.programMap_0.get_za3lpa$(program), name);
  };
  gl.prototype.getBooleanv_za3lpa$ = function (pname) {
    throw new UnsupportedGLError();
  };
  gl.prototype.getBufferParameteriv_vux9f0$ = function (target, pname) {
    var result = this.glRenderingContext_0.getBufferParameter(target, pname);
    if (typeof result === 'number') {
      return result;
    }
     else if (Kotlin.isType(result, Kotlin.Long)) {
      return result.toInt();
    }
    throw IllegalStateException_init('Invalid buffer parameter');
  };
  gl.prototype.getError = function () {
    return this.glRenderingContext_0.getError();
  };
  gl.prototype.getFloatv_za3lpa$ = function (pname) {
    throw new UnsupportedGLError();
  };
  gl.prototype.getFramebufferAttachmentParameteriv_qt1dr2$ = function (target, attachment, pname) {
    var result = this.glRenderingContext_0.getFramebufferAttachmentParameter(target, attachment, pname);
    if (typeof result === 'number') {
      return result;
    }
     else if (Kotlin.isType(result, Kotlin.Long)) {
      return result.toInt();
    }
    throw IllegalStateException_init('Invalid framebuffer attachment parameter');
  };
  gl.prototype.getIntegerv_za3lpa$ = function (pname) {
    var tmp$, tmp$_0;
    switch (pname) {
      case 35725:
        this.shaderMap_0.search_11rb$(Kotlin.isType(tmp$ = this.glRenderingContext_0.getParameter(pname), WebGLShader) ? tmp$ : throwCCE());
        break;
      case 36006:
        this.framebufferMap_0.search_11rb$(Kotlin.isType(tmp$_0 = this.glRenderingContext_0.getParameter(pname), WebGLFramebuffer) ? tmp$_0 : throwCCE());
        break;
    }
    throw new UnsupportedGLError();
  };
  gl.prototype.getProgramiv_vux9f0$ = function (program, pname) {
    throw new UnsupportedGLError();
  };
  gl.prototype.getProgramInfoLog_za3lpa$ = function (program) {
    var infoLog = this.glRenderingContext_0.getProgramInfoLog(this.programMap_0.get_za3lpa$(program));
    if (infoLog == null || isBlank(infoLog)) {
      return null;
    }
    return infoLog;
  };
  gl.prototype.getRenderbufferParameteriv_vux9f0$ = function (target, pname) {
    var result = this.glRenderingContext_0.getRenderbufferParameter(target, pname);
    if (typeof result === 'number') {
      return result;
    }
     else if (Kotlin.isType(result, Kotlin.Long)) {
      return result.toInt();
    }
    throw IllegalStateException_init('Invalid renderbuffer attachment parameter');
  };
  gl.prototype.getShaderiv_vux9f0$ = function (shader, pname) {
    throw new UnsupportedGLError();
  };
  gl.prototype.getShaderInfoLog_za3lpa$ = function (shader) {
    var infoLog = this.glRenderingContext_0.getShaderInfoLog(this.shaderMap_0.get_za3lpa$(shader));
    if (infoLog == null || isBlank(infoLog)) {
      return null;
    }
    return infoLog;
  };
  gl.prototype.getShaderPrecisionFormat_vux9f0$ = function (shadertype, precisiontype) {
    var value = this.glRenderingContext_0.getShaderPrecisionFormat(shadertype, precisiontype);
    var checkNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalStateException_init(message.toString());
    }
     else {
      checkNotNull$result = value;
    }
    var result = checkNotNull$result;
    return to(result.rangeMax, result.precision);
  };
  gl.prototype.getShaderSource_za3lpa$ = function (shader) {
    var value = this.glRenderingContext_0.getShaderSource(this.shaderMap_0.get_za3lpa$(shader));
    var checkNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalStateException_init(message.toString());
    }
     else {
      checkNotNull$result = value;
    }
    return checkNotNull$result;
  };
  gl.prototype.getString_za3lpa$ = function (name) {
    throw new UnsupportedGLError();
  };
  gl.prototype.getTexParameterfv_vux9f0$ = function (target, pname) {
    var tmp$;
    var value = typeof (tmp$ = this.glRenderingContext_0.getTexParameter(target, pname)) === 'number' ? tmp$ : null;
    var checkNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalStateException_init(message.toString());
    }
     else {
      checkNotNull$result = value;
    }
    return checkNotNull$result;
  };
  gl.prototype.getTexParameteriv_vux9f0$ = function (target, pname) {
    var result = this.glRenderingContext_0.getTexParameter(target, pname);
    if (typeof result === 'number') {
      return result;
    }
     else if (Kotlin.isType(result, Kotlin.Long)) {
      return result.toInt();
    }
    throw IllegalStateException_init('Invalid renderbuffer attachment parameter');
  };
  gl.prototype.getUniformfv_vux9f0$ = function (program, location) {
    var tmp$;
    var value = typeof (tmp$ = this.glRenderingContext_0.getUniform(this.programMap_0.get_za3lpa$(program), this.uniformMap_0.get_za3lpa$(location))) === 'number' ? tmp$ : null;
    var checkNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalStateException_init(message.toString());
    }
     else {
      checkNotNull$result = value;
    }
    return checkNotNull$result;
  };
  gl.prototype.getUniformiv_vux9f0$ = function (program, location) {
    var tmp$;
    var value = typeof (tmp$ = this.glRenderingContext_0.getUniform(this.programMap_0.get_za3lpa$(program), this.uniformMap_0.get_za3lpa$(location))) === 'number' ? tmp$ : null;
    var checkNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalStateException_init(message.toString());
    }
     else {
      checkNotNull$result = value;
    }
    return checkNotNull$result;
  };
  gl.prototype.getUniformLocation_19mbxw$ = function (program, name) {
    var webGLProgram = this.programMap_0.get_za3lpa$(program);
    var webGLLocation = this.glRenderingContext_0.getUniformLocation(webGLProgram, name);
    var tmp$ = this.uniformMap_0;
    var checkNotNull$result;
    if (webGLLocation == null) {
      var message = 'Required value was null.';
      throw IllegalStateException_init(message.toString());
    }
     else {
      checkNotNull$result = webGLLocation;
    }
    return tmp$.create_11rb$(checkNotNull$result);
  };
  gl.prototype.getVertexAttribfv_vux9f0$ = function (index, pname) {
    var tmp$;
    var value = typeof (tmp$ = this.glRenderingContext_0.getVertexAttrib(index, pname)) === 'number' ? tmp$ : null;
    var checkNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalStateException_init(message.toString());
    }
     else {
      checkNotNull$result = value;
    }
    return checkNotNull$result;
  };
  gl.prototype.getVertexAttribiv_vux9f0$ = function (index, pname) {
    var tmp$;
    var value = typeof (tmp$ = this.glRenderingContext_0.getVertexAttrib(index, pname)) === 'number' ? tmp$ : null;
    var checkNotNull$result;
    if (value == null) {
      var message = 'Required value was null.';
      throw IllegalStateException_init(message.toString());
    }
     else {
      checkNotNull$result = value;
    }
    return checkNotNull$result;
  };
  gl.prototype.hint_vux9f0$ = function (target, mode) {
    this.glRenderingContext_0.hint(target, mode);
  };
  gl.prototype.isBuffer_za3lpa$ = function (buffer) {
    return this.glRenderingContext_0.isBuffer(this.bufferMap_0.get_za3lpa$(buffer));
  };
  gl.prototype.isEnabled_za3lpa$ = function (cap) {
    return this.glRenderingContext_0.isEnabled(cap);
  };
  gl.prototype.isFramebuffer_za3lpa$ = function (framebuffer) {
    return this.glRenderingContext_0.isFramebuffer(this.framebufferMap_0.get_za3lpa$(framebuffer));
  };
  gl.prototype.isProgram_za3lpa$ = function (program) {
    return this.glRenderingContext_0.isProgram(this.programMap_0.get_za3lpa$(program));
  };
  gl.prototype.isRenderbuffer_za3lpa$ = function (renderbuffer) {
    return this.glRenderingContext_0.isRenderbuffer(this.renderbufferMap_0.get_za3lpa$(renderbuffer));
  };
  gl.prototype.isShader_za3lpa$ = function (shader) {
    return this.glRenderingContext_0.isShader(this.shaderMap_0.get_za3lpa$(shader));
  };
  gl.prototype.isTexture_za3lpa$ = function (texture) {
    return this.glRenderingContext_0.isTexture(this.textureMap_0.get_za3lpa$(texture));
  };
  gl.prototype.lineWidth_mx4ult$ = function (width) {
    this.glRenderingContext_0.lineWidth(width);
  };
  gl.prototype.linkProgram_za3lpa$ = function (program) {
    this.glRenderingContext_0.linkProgram(this.programMap_0.get_za3lpa$(program));
  };
  gl.prototype.pixelStorei_vux9f0$ = function (pname, param) {
    this.glRenderingContext_0.pixelStorei(pname, param);
  };
  gl.prototype.polygonOffset_dleff0$ = function (factor, units) {
    this.glRenderingContext_0.polygonOffset(factor, units);
  };
  gl.prototype.readPixelsi_mbbjvw$ = function (x, y, width, height, format, type) {
    var intBuffer = new Int32Array(Kotlin.imul(width, height));
    this.glRenderingContext_0.readPixels(x, y, width, height, format, type, intBuffer);
    return toIntArray_0(intBuffer);
  };
  gl.prototype.readPixelsf_mbbjvw$ = function (x, y, width, height, format, type) {
    var floatArray = new Float32Array(Kotlin.imul(width, height));
    this.glRenderingContext_0.readPixels(x, y, width, height, format, type, floatArray);
    return toFloatArray(floatArray);
  };
  gl.prototype.releaseShaderCompiler = function () {
    throw new UnsupportedGLError();
  };
  gl.prototype.renderbufferStorage_tjonv8$ = function (target, internalformat, width, height) {
    this.glRenderingContext_0.renderbufferStorage(target, internalformat, width, height);
  };
  gl.prototype.sampleCoverage_8ca0d4$ = function (value, invert) {
    this.glRenderingContext_0.sampleCoverage(value, invert);
  };
  gl.prototype.scissor_tjonv8$ = function (x, y, width, height) {
    this.glRenderingContext_0.scissor(x, y, width, height);
  };
  gl.prototype.shaderBinary_wuya8p$ = function (shaders, binaryformat, binary) {
    throw new UnsupportedGLError();
  };
  gl.prototype.shaderSource_19mbxw$ = function (shader, string) {
    this.glRenderingContext_0.shaderSource(this.shaderMap_0.get_za3lpa$(shader), string);
  };
  gl.prototype.stencilFunc_qt1dr2$ = function (func, ref, mask) {
    this.glRenderingContext_0.stencilFunc(func, ref, mask);
  };
  gl.prototype.stencilFuncSeparate_tjonv8$ = function (face, func, ref, mask) {
    this.glRenderingContext_0.stencilFunc(func, ref, mask);
  };
  gl.prototype.stencilMask_za3lpa$ = function (mask) {
    this.glRenderingContext_0.stencilMask(mask);
  };
  gl.prototype.stencilMaskSeparate_vux9f0$ = function (face, mask) {
    this.glRenderingContext_0.stencilMaskSeparate(face, mask);
  };
  gl.prototype.stencilOp_qt1dr2$ = function (fail, zfail, zpass) {
    this.glRenderingContext_0.stencilOp(fail, zfail, zpass);
  };
  gl.prototype.stencilOpSeparate_tjonv8$ = function (face, sfail, dpfail, dppass) {
    this.glRenderingContext_0.stencilOpSeparate(face, sfail, dpfail, dppass);
  };
  gl.prototype.texImage2D_6c538c$ = function (target, level, internalformat, width, height, border, format, type, pixels) {
    this.glRenderingContext_0.texImage2D(target, level, internalformat, width, height, border, format, type, toUint8Array(pixels));
  };
  gl.prototype.texParameterf_n0b4r3$ = function (target, pname, param) {
    this.glRenderingContext_0.texParameterf(target, pname, param);
  };
  gl.prototype.texParameterfv_l5lmba$ = function (target, pname, params) {
    throw new UnsupportedGLError();
  };
  gl.prototype.texParameteri_qt1dr2$ = function (target, pname, param) {
    this.glRenderingContext_0.texParameteri(target, pname, param);
  };
  gl.prototype.texParameteriv_nps3vt$ = function (target, pname, params) {
    throw new UnsupportedGLError();
  };
  gl.prototype.texSubImage2D_6c538c$ = function (target, level, xoffset, yoffset, width, height, format, type, pixels) {
    this.glRenderingContext_0.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, toUint32Array(pixels));
  };
  gl.prototype.uniform1f_24o109$ = function (location, v0) {
    this.glRenderingContext_0.uniform1f(this.uniformMap_0.get_za3lpa$(location), v0);
  };
  gl.prototype.uniform1fv_i8oon4$ = function (location, value) {
    this.glRenderingContext_0.uniform1fv(this.uniformMap_0.get_za3lpa$(location), toTypedArray_0(value));
  };
  gl.prototype.uniform1i_vux9f0$ = function (location, v0) {
    this.glRenderingContext_0.uniform1i(this.uniformMap_0.get_za3lpa$(location), v0);
  };
  gl.prototype.uniform1iv_aio0fn$ = function (location, value) {
    this.glRenderingContext_0.uniform1iv(this.uniformMap_0.get_za3lpa$(location), toTypedArray(value));
  };
  gl.prototype.uniform2f_nhq4am$ = function (location, v0, v1) {
    this.glRenderingContext_0.uniform2f(this.uniformMap_0.get_za3lpa$(location), v0, v1);
  };
  gl.prototype.uniform2fv_i8oon4$ = function (location, value) {
    this.glRenderingContext_0.uniform2fv(this.uniformMap_0.get_za3lpa$(location), toTypedArray_0(value));
  };
  gl.prototype.uniform2i_qt1dr2$ = function (location, v0, v1) {
    this.glRenderingContext_0.uniform2i(this.uniformMap_0.get_za3lpa$(location), v0, v1);
  };
  gl.prototype.uniform2iv_aio0fn$ = function (location, value) {
    this.glRenderingContext_0.uniform2iv(this.uniformMap_0.get_za3lpa$(location), toTypedArray(value));
  };
  gl.prototype.uniform3f_eyukp3$ = function (location, v0, v1, v2) {
    this.glRenderingContext_0.uniform3f(this.uniformMap_0.get_za3lpa$(location), v0, v1, v2);
  };
  gl.prototype.uniform3fv_i8oon4$ = function (location, value) {
    this.glRenderingContext_0.uniform3fv(this.uniformMap_0.get_za3lpa$(location), toTypedArray_0(value));
  };
  gl.prototype.uniform3i_tjonv8$ = function (location, v0, v1, v2) {
    this.glRenderingContext_0.uniform3i(this.uniformMap_0.get_za3lpa$(location), v0, v1, v2);
  };
  gl.prototype.uniform3iv_aio0fn$ = function (location, value) {
    this.glRenderingContext_0.uniform3iv(this.uniformMap_0.get_za3lpa$(location), toTypedArray(value));
  };
  gl.prototype.uniform4f_xpxj32$ = function (location, v0, v1, v2, v3) {
    this.glRenderingContext_0.uniform4f(this.uniformMap_0.get_za3lpa$(location), v0, v1, v2, v3);
  };
  gl.prototype.uniform4fv_i8oon4$ = function (location, value) {
    this.glRenderingContext_0.uniform4fv(this.uniformMap_0.get_za3lpa$(location), toTypedArray_0(value));
  };
  gl.prototype.uniform4i_4qozqa$ = function (location, v0, v1, v2, v3) {
    this.glRenderingContext_0.uniform4i(this.uniformMap_0.get_za3lpa$(location), v0, v1, v2, v3);
  };
  gl.prototype.uniform4iv_aio0fn$ = function (location, value) {
    this.glRenderingContext_0.uniform4iv(this.uniformMap_0.get_za3lpa$(location), toTypedArray(value));
  };
  gl.prototype.uniformMatrix2fv_f6vpdv$ = function (location, transpose, value) {
    this.glRenderingContext_0.uniformMatrix2fv(this.uniformMap_0.get_za3lpa$(location), transpose, toTypedArray_0(value));
  };
  gl.prototype.uniformMatrix3fv_f6vpdv$ = function (location, transpose, value) {
    this.glRenderingContext_0.uniformMatrix3fv(this.uniformMap_0.get_za3lpa$(location), transpose, toTypedArray_0(value));
  };
  gl.prototype.uniformMatrix4fv_f6vpdv$ = function (location, transpose, value) {
    this.glRenderingContext_0.uniformMatrix4fv(this.uniformMap_0.get_za3lpa$(location), transpose, toTypedArray_0(value));
  };
  gl.prototype.useProgram_za3lpa$ = function (program) {
    this.glRenderingContext_0.useProgram(this.programMap_0.getOrNull_za3lpa$(program));
  };
  gl.prototype.validateProgram_za3lpa$ = function (program) {
    this.glRenderingContext_0.validateProgram(this.programMap_0.get_za3lpa$(program));
  };
  gl.prototype.vertexAttrib1f_24o109$ = function (index, x) {
    this.glRenderingContext_0.vertexAttrib1f(index, x);
  };
  gl.prototype.vertexAttrib1fv_i8oon4$ = function (index, v) {
    this.glRenderingContext_0.vertexAttrib1fv(index, v);
  };
  gl.prototype.vertexAttrib2f_nhq4am$ = function (index, x, y) {
    this.glRenderingContext_0.vertexAttrib2f(index, x, y);
  };
  gl.prototype.vertexAttrib2fv_i8oon4$ = function (index, v) {
    this.glRenderingContext_0.vertexAttrib2fv(index, v);
  };
  gl.prototype.vertexAttrib3f_eyukp3$ = function (index, x, y, z) {
    this.glRenderingContext_0.vertexAttrib3f(index, x, y, z);
  };
  gl.prototype.vertexAttrib3fv_i8oon4$ = function (index, v) {
    this.glRenderingContext_0.vertexAttrib3fv(index, v);
  };
  gl.prototype.vertexAttrib4f_xpxj32$ = function (index, x, y, z, w) {
    this.glRenderingContext_0.vertexAttrib4f(index, x, y, z, w);
  };
  gl.prototype.vertexAttrib4fv_i8oon4$ = function (index, v) {
    this.glRenderingContext_0.vertexAttrib4fv(index, v);
  };
  gl.prototype.vertexAttribPointer_7q94s7$ = function (index, size, type, normalized, stride) {
    this.glRenderingContext_0.vertexAttribPointer(index, size, type, normalized, stride, 0);
  };
  gl.prototype.vertexAttribPointer_owihk5$ = function (index, size, type, normalized, stride, offset) {
    this.glRenderingContext_0.vertexAttribPointer(index, size, type, normalized, stride, offset);
  };
  gl.prototype.viewport_tjonv8$ = function (x, y, width, height) {
    this.glRenderingContext_0.viewport(x, y, width, height);
  };
  gl.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'gl',
    interfaces: []
  };
  var gl_instance = null;
  function gl_getInstance() {
    if (gl_instance === null) {
      new gl();
    }
    return gl_instance;
  }
  function toUint32Array($receiver) {
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(item);
    }
    return new Uint32Array(copyToArray(destination));
  }
  function toUint8Array($receiver) {
    return new Uint8Array(toTypedArray_1($receiver));
  }
  function toIntArray_0($receiver) {
    var intArray = new Int32Array($receiver.length);
    var i = 0;
    while (i < $receiver.length) {
      intArray[i] = $receiver[i];
      i = i + 1 | 0;
    }
    return intArray;
  }
  function toFloatArray($receiver) {
    var floatArray = new Float32Array($receiver.length);
    var i = 0;
    while (i < $receiver.length) {
      floatArray[i] = $receiver[i];
      i = i + 1 | 0;
    }
    return floatArray;
  }
  function WebGLMap() {
    this.map_0 = LinkedHashMap_init();
    this.current_0 = 1;
  }
  WebGLMap.prototype.create_11rb$ = function (value) {
    var next = this.current_0;
    var $receiver = this.map_0;
    var key = this.current_0;
    $receiver.put_xwzc9p$(key, value);
    this.current_0 = this.current_0 + 1 | 0;
    return next;
  };
  WebGLMap.prototype.destroy_za3lpa$ = function (id) {
    var value = this.get_za3lpa$(id);
    this.map_0.remove_11rb$(id);
    return value;
  };
  WebGLMap.prototype.get_za3lpa$ = function (id) {
    return getValue(this.map_0, id);
  };
  WebGLMap.prototype.getOrNull_za3lpa$ = function (id) {
    return this.map_0.get_11rb$(id);
  };
  WebGLMap.prototype.search_11rb$ = function (value) {
    var $receiver = this.map_0;
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.value === value) {
        destination.put_xwzc9p$(element.key, element.value);
      }
    }
    return first(destination.keys);
  };
  WebGLMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WebGLMap',
    interfaces: []
  };
  var package$io = _.io || (_.io = {});
  var package$github = package$io.github || (package$io.github = {});
  var package$inoutch = package$github.inoutch || (package$github.inoutch = {});
  var package$kotlin = package$inoutch.kotlin || (package$inoutch.kotlin = {});
  var package$gl = package$kotlin.gl || (package$kotlin.gl = {});
  var package$api = package$gl.api || (package$gl.api = {});
  Object.defineProperty(package$api, 'GL_DEPTH_BUFFER_BIT', {
    get: function () {
      return GL_DEPTH_BUFFER_BIT;
    }
  });
  Object.defineProperty(package$api, 'GL_STENCIL_BUFFER_BIT', {
    get: function () {
      return GL_STENCIL_BUFFER_BIT;
    }
  });
  Object.defineProperty(package$api, 'GL_COLOR_BUFFER_BIT', {
    get: function () {
      return GL_COLOR_BUFFER_BIT;
    }
  });
  Object.defineProperty(package$api, 'GL_FALSE', {
    get: function () {
      return GL_FALSE;
    }
  });
  Object.defineProperty(package$api, 'GL_TRUE', {
    get: function () {
      return GL_TRUE;
    }
  });
  Object.defineProperty(package$api, 'GL_POINTS', {
    get: function () {
      return GL_POINTS;
    }
  });
  Object.defineProperty(package$api, 'GL_LINES', {
    get: function () {
      return GL_LINES;
    }
  });
  Object.defineProperty(package$api, 'GL_LINE_LOOP', {
    get: function () {
      return GL_LINE_LOOP;
    }
  });
  Object.defineProperty(package$api, 'GL_LINE_STRIP', {
    get: function () {
      return GL_LINE_STRIP;
    }
  });
  Object.defineProperty(package$api, 'GL_TRIANGLES', {
    get: function () {
      return GL_TRIANGLES;
    }
  });
  Object.defineProperty(package$api, 'GL_TRIANGLE_STRIP', {
    get: function () {
      return GL_TRIANGLE_STRIP;
    }
  });
  Object.defineProperty(package$api, 'GL_TRIANGLE_FAN', {
    get: function () {
      return GL_TRIANGLE_FAN;
    }
  });
  Object.defineProperty(package$api, 'GL_ZERO', {
    get: function () {
      return GL_ZERO;
    }
  });
  Object.defineProperty(package$api, 'GL_ONE', {
    get: function () {
      return GL_ONE;
    }
  });
  Object.defineProperty(package$api, 'GL_SRC_COLOR', {
    get: function () {
      return GL_SRC_COLOR;
    }
  });
  Object.defineProperty(package$api, 'GL_ONE_MINUS_SRC_COLOR', {
    get: function () {
      return GL_ONE_MINUS_SRC_COLOR;
    }
  });
  Object.defineProperty(package$api, 'GL_SRC_ALPHA', {
    get: function () {
      return GL_SRC_ALPHA;
    }
  });
  Object.defineProperty(package$api, 'GL_ONE_MINUS_SRC_ALPHA', {
    get: function () {
      return GL_ONE_MINUS_SRC_ALPHA;
    }
  });
  Object.defineProperty(package$api, 'GL_DST_ALPHA', {
    get: function () {
      return GL_DST_ALPHA;
    }
  });
  Object.defineProperty(package$api, 'GL_ONE_MINUS_DST_ALPHA', {
    get: function () {
      return GL_ONE_MINUS_DST_ALPHA;
    }
  });
  Object.defineProperty(package$api, 'GL_DST_COLOR', {
    get: function () {
      return GL_DST_COLOR;
    }
  });
  Object.defineProperty(package$api, 'GL_ONE_MINUS_DST_COLOR', {
    get: function () {
      return GL_ONE_MINUS_DST_COLOR;
    }
  });
  Object.defineProperty(package$api, 'GL_SRC_ALPHA_SATURATE', {
    get: function () {
      return GL_SRC_ALPHA_SATURATE;
    }
  });
  Object.defineProperty(package$api, 'GL_FUNC_ADD', {
    get: function () {
      return GL_FUNC_ADD;
    }
  });
  Object.defineProperty(package$api, 'GL_BLEND_EQUATION', {
    get: function () {
      return GL_BLEND_EQUATION;
    }
  });
  Object.defineProperty(package$api, 'GL_BLEND_EQUATION_RGB', {
    get: function () {
      return GL_BLEND_EQUATION_RGB;
    }
  });
  Object.defineProperty(package$api, 'GL_BLEND_EQUATION_ALPHA', {
    get: function () {
      return GL_BLEND_EQUATION_ALPHA;
    }
  });
  Object.defineProperty(package$api, 'GL_FUNC_SUBTRACT', {
    get: function () {
      return GL_FUNC_SUBTRACT;
    }
  });
  Object.defineProperty(package$api, 'GL_FUNC_REVERSE_SUBTRACT', {
    get: function () {
      return GL_FUNC_REVERSE_SUBTRACT;
    }
  });
  Object.defineProperty(package$api, 'GL_BLEND_DST_RGB', {
    get: function () {
      return GL_BLEND_DST_RGB;
    }
  });
  Object.defineProperty(package$api, 'GL_BLEND_SRC_RGB', {
    get: function () {
      return GL_BLEND_SRC_RGB;
    }
  });
  Object.defineProperty(package$api, 'GL_BLEND_DST_ALPHA', {
    get: function () {
      return GL_BLEND_DST_ALPHA;
    }
  });
  Object.defineProperty(package$api, 'GL_BLEND_SRC_ALPHA', {
    get: function () {
      return GL_BLEND_SRC_ALPHA;
    }
  });
  Object.defineProperty(package$api, 'GL_CONSTANT_COLOR', {
    get: function () {
      return GL_CONSTANT_COLOR;
    }
  });
  Object.defineProperty(package$api, 'GL_ONE_MINUS_CONSTANT_COLOR', {
    get: function () {
      return GL_ONE_MINUS_CONSTANT_COLOR;
    }
  });
  Object.defineProperty(package$api, 'GL_CONSTANT_ALPHA', {
    get: function () {
      return GL_CONSTANT_ALPHA;
    }
  });
  Object.defineProperty(package$api, 'GL_ONE_MINUS_CONSTANT_ALPHA', {
    get: function () {
      return GL_ONE_MINUS_CONSTANT_ALPHA;
    }
  });
  Object.defineProperty(package$api, 'GL_BLEND_COLOR', {
    get: function () {
      return GL_BLEND_COLOR;
    }
  });
  Object.defineProperty(package$api, 'GL_ARRAY_BUFFER', {
    get: function () {
      return GL_ARRAY_BUFFER;
    }
  });
  Object.defineProperty(package$api, 'GL_ELEMENT_ARRAY_BUFFER', {
    get: function () {
      return GL_ELEMENT_ARRAY_BUFFER;
    }
  });
  Object.defineProperty(package$api, 'GL_ARRAY_BUFFER_BINDING', {
    get: function () {
      return GL_ARRAY_BUFFER_BINDING;
    }
  });
  Object.defineProperty(package$api, 'GL_ELEMENT_ARRAY_BUFFER_BINDING', {
    get: function () {
      return GL_ELEMENT_ARRAY_BUFFER_BINDING;
    }
  });
  Object.defineProperty(package$api, 'GL_STREAM_DRAW', {
    get: function () {
      return GL_STREAM_DRAW;
    }
  });
  Object.defineProperty(package$api, 'GL_STATIC_DRAW', {
    get: function () {
      return GL_STATIC_DRAW;
    }
  });
  Object.defineProperty(package$api, 'GL_DYNAMIC_DRAW', {
    get: function () {
      return GL_DYNAMIC_DRAW;
    }
  });
  Object.defineProperty(package$api, 'GL_BUFFER_SIZE', {
    get: function () {
      return GL_BUFFER_SIZE;
    }
  });
  Object.defineProperty(package$api, 'GL_BUFFER_USAGE', {
    get: function () {
      return GL_BUFFER_USAGE;
    }
  });
  Object.defineProperty(package$api, 'GL_CURRENT_VERTEX_ATTRIB', {
    get: function () {
      return GL_CURRENT_VERTEX_ATTRIB;
    }
  });
  Object.defineProperty(package$api, 'GL_FRONT', {
    get: function () {
      return GL_FRONT;
    }
  });
  Object.defineProperty(package$api, 'GL_BACK', {
    get: function () {
      return GL_BACK;
    }
  });
  Object.defineProperty(package$api, 'GL_FRONT_AND_BACK', {
    get: function () {
      return GL_FRONT_AND_BACK;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE_2D', {
    get: function () {
      return GL_TEXTURE_2D;
    }
  });
  Object.defineProperty(package$api, 'GL_CULL_FACE', {
    get: function () {
      return GL_CULL_FACE;
    }
  });
  Object.defineProperty(package$api, 'GL_BLEND', {
    get: function () {
      return GL_BLEND;
    }
  });
  Object.defineProperty(package$api, 'GL_DITHER', {
    get: function () {
      return GL_DITHER;
    }
  });
  Object.defineProperty(package$api, 'GL_STENCIL_TEST', {
    get: function () {
      return GL_STENCIL_TEST;
    }
  });
  Object.defineProperty(package$api, 'GL_DEPTH_TEST', {
    get: function () {
      return GL_DEPTH_TEST;
    }
  });
  Object.defineProperty(package$api, 'GL_SCISSOR_TEST', {
    get: function () {
      return GL_SCISSOR_TEST;
    }
  });
  Object.defineProperty(package$api, 'GL_POLYGON_OFFSET_FILL', {
    get: function () {
      return GL_POLYGON_OFFSET_FILL;
    }
  });
  Object.defineProperty(package$api, 'GL_SAMPLE_ALPHA_TO_COVERAGE', {
    get: function () {
      return GL_SAMPLE_ALPHA_TO_COVERAGE;
    }
  });
  Object.defineProperty(package$api, 'GL_SAMPLE_COVERAGE', {
    get: function () {
      return GL_SAMPLE_COVERAGE;
    }
  });
  Object.defineProperty(package$api, 'GL_NO_ERROR', {
    get: function () {
      return GL_NO_ERROR;
    }
  });
  Object.defineProperty(package$api, 'GL_INVALID_ENUM', {
    get: function () {
      return GL_INVALID_ENUM;
    }
  });
  Object.defineProperty(package$api, 'GL_INVALID_VALUE', {
    get: function () {
      return GL_INVALID_VALUE;
    }
  });
  Object.defineProperty(package$api, 'GL_INVALID_OPERATION', {
    get: function () {
      return GL_INVALID_OPERATION;
    }
  });
  Object.defineProperty(package$api, 'GL_OUT_OF_MEMORY', {
    get: function () {
      return GL_OUT_OF_MEMORY;
    }
  });
  Object.defineProperty(package$api, 'GL_CW', {
    get: function () {
      return GL_CW;
    }
  });
  Object.defineProperty(package$api, 'GL_CCW', {
    get: function () {
      return GL_CCW;
    }
  });
  Object.defineProperty(package$api, 'GL_LINE_WIDTH', {
    get: function () {
      return GL_LINE_WIDTH;
    }
  });
  Object.defineProperty(package$api, 'GL_ALIASED_POINT_SIZE_RANGE', {
    get: function () {
      return GL_ALIASED_POINT_SIZE_RANGE;
    }
  });
  Object.defineProperty(package$api, 'GL_ALIASED_LINE_WIDTH_RANGE', {
    get: function () {
      return GL_ALIASED_LINE_WIDTH_RANGE;
    }
  });
  Object.defineProperty(package$api, 'GL_CULL_FACE_MODE', {
    get: function () {
      return GL_CULL_FACE_MODE;
    }
  });
  Object.defineProperty(package$api, 'GL_FRONT_FACE', {
    get: function () {
      return GL_FRONT_FACE;
    }
  });
  Object.defineProperty(package$api, 'GL_DEPTH_RANGE', {
    get: function () {
      return GL_DEPTH_RANGE;
    }
  });
  Object.defineProperty(package$api, 'GL_DEPTH_WRITEMASK', {
    get: function () {
      return GL_DEPTH_WRITEMASK;
    }
  });
  Object.defineProperty(package$api, 'GL_DEPTH_CLEAR_VALUE', {
    get: function () {
      return GL_DEPTH_CLEAR_VALUE;
    }
  });
  Object.defineProperty(package$api, 'GL_DEPTH_FUNC', {
    get: function () {
      return GL_DEPTH_FUNC;
    }
  });
  Object.defineProperty(package$api, 'GL_STENCIL_CLEAR_VALUE', {
    get: function () {
      return GL_STENCIL_CLEAR_VALUE;
    }
  });
  Object.defineProperty(package$api, 'GL_STENCIL_FUNC', {
    get: function () {
      return GL_STENCIL_FUNC;
    }
  });
  Object.defineProperty(package$api, 'GL_STENCIL_FAIL', {
    get: function () {
      return GL_STENCIL_FAIL;
    }
  });
  Object.defineProperty(package$api, 'GL_STENCIL_PASS_DEPTH_FAIL', {
    get: function () {
      return GL_STENCIL_PASS_DEPTH_FAIL;
    }
  });
  Object.defineProperty(package$api, 'GL_STENCIL_PASS_DEPTH_PASS', {
    get: function () {
      return GL_STENCIL_PASS_DEPTH_PASS;
    }
  });
  Object.defineProperty(package$api, 'GL_STENCIL_REF', {
    get: function () {
      return GL_STENCIL_REF;
    }
  });
  Object.defineProperty(package$api, 'GL_STENCIL_VALUE_MASK', {
    get: function () {
      return GL_STENCIL_VALUE_MASK;
    }
  });
  Object.defineProperty(package$api, 'GL_STENCIL_WRITEMASK', {
    get: function () {
      return GL_STENCIL_WRITEMASK;
    }
  });
  Object.defineProperty(package$api, 'GL_STENCIL_BACK_FUNC', {
    get: function () {
      return GL_STENCIL_BACK_FUNC;
    }
  });
  Object.defineProperty(package$api, 'GL_STENCIL_BACK_FAIL', {
    get: function () {
      return GL_STENCIL_BACK_FAIL;
    }
  });
  Object.defineProperty(package$api, 'GL_STENCIL_BACK_PASS_DEPTH_FAIL', {
    get: function () {
      return GL_STENCIL_BACK_PASS_DEPTH_FAIL;
    }
  });
  Object.defineProperty(package$api, 'GL_STENCIL_BACK_PASS_DEPTH_PASS', {
    get: function () {
      return GL_STENCIL_BACK_PASS_DEPTH_PASS;
    }
  });
  Object.defineProperty(package$api, 'GL_STENCIL_BACK_REF', {
    get: function () {
      return GL_STENCIL_BACK_REF;
    }
  });
  Object.defineProperty(package$api, 'GL_STENCIL_BACK_VALUE_MASK', {
    get: function () {
      return GL_STENCIL_BACK_VALUE_MASK;
    }
  });
  Object.defineProperty(package$api, 'GL_STENCIL_BACK_WRITEMASK', {
    get: function () {
      return GL_STENCIL_BACK_WRITEMASK;
    }
  });
  Object.defineProperty(package$api, 'GL_VIEWPORT', {
    get: function () {
      return GL_VIEWPORT;
    }
  });
  Object.defineProperty(package$api, 'GL_SCISSOR_BOX', {
    get: function () {
      return GL_SCISSOR_BOX;
    }
  });
  Object.defineProperty(package$api, 'GL_COLOR_CLEAR_VALUE', {
    get: function () {
      return GL_COLOR_CLEAR_VALUE;
    }
  });
  Object.defineProperty(package$api, 'GL_COLOR_WRITEMASK', {
    get: function () {
      return GL_COLOR_WRITEMASK;
    }
  });
  Object.defineProperty(package$api, 'GL_UNPACK_ALIGNMENT', {
    get: function () {
      return GL_UNPACK_ALIGNMENT;
    }
  });
  Object.defineProperty(package$api, 'GL_PACK_ALIGNMENT', {
    get: function () {
      return GL_PACK_ALIGNMENT;
    }
  });
  Object.defineProperty(package$api, 'GL_MAX_TEXTURE_SIZE', {
    get: function () {
      return GL_MAX_TEXTURE_SIZE;
    }
  });
  Object.defineProperty(package$api, 'GL_MAX_VIEWPORT_DIMS', {
    get: function () {
      return GL_MAX_VIEWPORT_DIMS;
    }
  });
  Object.defineProperty(package$api, 'GL_SUBPIXEL_BITS', {
    get: function () {
      return GL_SUBPIXEL_BITS;
    }
  });
  Object.defineProperty(package$api, 'GL_RED_BITS', {
    get: function () {
      return GL_RED_BITS;
    }
  });
  Object.defineProperty(package$api, 'GL_GREEN_BITS', {
    get: function () {
      return GL_GREEN_BITS;
    }
  });
  Object.defineProperty(package$api, 'GL_BLUE_BITS', {
    get: function () {
      return GL_BLUE_BITS;
    }
  });
  Object.defineProperty(package$api, 'GL_ALPHA_BITS', {
    get: function () {
      return GL_ALPHA_BITS;
    }
  });
  Object.defineProperty(package$api, 'GL_DEPTH_BITS', {
    get: function () {
      return GL_DEPTH_BITS;
    }
  });
  Object.defineProperty(package$api, 'GL_STENCIL_BITS', {
    get: function () {
      return GL_STENCIL_BITS;
    }
  });
  Object.defineProperty(package$api, 'GL_POLYGON_OFFSET_UNITS', {
    get: function () {
      return GL_POLYGON_OFFSET_UNITS;
    }
  });
  Object.defineProperty(package$api, 'GL_POLYGON_OFFSET_FACTOR', {
    get: function () {
      return GL_POLYGON_OFFSET_FACTOR;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE_BINDING_2D', {
    get: function () {
      return GL_TEXTURE_BINDING_2D;
    }
  });
  Object.defineProperty(package$api, 'GL_SAMPLE_BUFFERS', {
    get: function () {
      return GL_SAMPLE_BUFFERS;
    }
  });
  Object.defineProperty(package$api, 'GL_SAMPLES', {
    get: function () {
      return GL_SAMPLES;
    }
  });
  Object.defineProperty(package$api, 'GL_SAMPLE_COVERAGE_VALUE', {
    get: function () {
      return GL_SAMPLE_COVERAGE_VALUE;
    }
  });
  Object.defineProperty(package$api, 'GL_SAMPLE_COVERAGE_INVERT', {
    get: function () {
      return GL_SAMPLE_COVERAGE_INVERT;
    }
  });
  Object.defineProperty(package$api, 'GL_NUM_COMPRESSED_TEXTURE_FORMATS', {
    get: function () {
      return GL_NUM_COMPRESSED_TEXTURE_FORMATS;
    }
  });
  Object.defineProperty(package$api, 'GL_COMPRESSED_TEXTURE_FORMATS', {
    get: function () {
      return GL_COMPRESSED_TEXTURE_FORMATS;
    }
  });
  Object.defineProperty(package$api, 'GL_DONT_CARE', {
    get: function () {
      return GL_DONT_CARE;
    }
  });
  Object.defineProperty(package$api, 'GL_FASTEST', {
    get: function () {
      return GL_FASTEST;
    }
  });
  Object.defineProperty(package$api, 'GL_NICEST', {
    get: function () {
      return GL_NICEST;
    }
  });
  Object.defineProperty(package$api, 'GL_GENERATE_MIPMAP_HINT', {
    get: function () {
      return GL_GENERATE_MIPMAP_HINT;
    }
  });
  Object.defineProperty(package$api, 'GL_BYTE', {
    get: function () {
      return GL_BYTE;
    }
  });
  Object.defineProperty(package$api, 'GL_UNSIGNED_BYTE', {
    get: function () {
      return GL_UNSIGNED_BYTE;
    }
  });
  Object.defineProperty(package$api, 'GL_SHORT', {
    get: function () {
      return GL_SHORT;
    }
  });
  Object.defineProperty(package$api, 'GL_UNSIGNED_SHORT', {
    get: function () {
      return GL_UNSIGNED_SHORT;
    }
  });
  Object.defineProperty(package$api, 'GL_INT', {
    get: function () {
      return GL_INT;
    }
  });
  Object.defineProperty(package$api, 'GL_UNSIGNED_INT', {
    get: function () {
      return GL_UNSIGNED_INT;
    }
  });
  Object.defineProperty(package$api, 'GL_FLOAT', {
    get: function () {
      return GL_FLOAT;
    }
  });
  Object.defineProperty(package$api, 'GL_FIXED', {
    get: function () {
      return GL_FIXED;
    }
  });
  Object.defineProperty(package$api, 'GL_DEPTH_COMPONENT', {
    get: function () {
      return GL_DEPTH_COMPONENT;
    }
  });
  Object.defineProperty(package$api, 'GL_ALPHA', {
    get: function () {
      return GL_ALPHA;
    }
  });
  Object.defineProperty(package$api, 'GL_RGB', {
    get: function () {
      return GL_RGB;
    }
  });
  Object.defineProperty(package$api, 'GL_RGBA', {
    get: function () {
      return GL_RGBA;
    }
  });
  Object.defineProperty(package$api, 'GL_LUMINANCE', {
    get: function () {
      return GL_LUMINANCE;
    }
  });
  Object.defineProperty(package$api, 'GL_LUMINANCE_ALPHA', {
    get: function () {
      return GL_LUMINANCE_ALPHA;
    }
  });
  Object.defineProperty(package$api, 'GL_UNSIGNED_SHORT_4_4_4_4', {
    get: function () {
      return GL_UNSIGNED_SHORT_4_4_4_4;
    }
  });
  Object.defineProperty(package$api, 'GL_UNSIGNED_SHORT_5_5_5_1', {
    get: function () {
      return GL_UNSIGNED_SHORT_5_5_5_1;
    }
  });
  Object.defineProperty(package$api, 'GL_UNSIGNED_SHORT_5_6_5', {
    get: function () {
      return GL_UNSIGNED_SHORT_5_6_5;
    }
  });
  Object.defineProperty(package$api, 'GL_FRAGMENT_SHADER', {
    get: function () {
      return GL_FRAGMENT_SHADER;
    }
  });
  Object.defineProperty(package$api, 'GL_VERTEX_SHADER', {
    get: function () {
      return GL_VERTEX_SHADER;
    }
  });
  Object.defineProperty(package$api, 'GL_MAX_VERTEX_ATTRIBS', {
    get: function () {
      return GL_MAX_VERTEX_ATTRIBS;
    }
  });
  Object.defineProperty(package$api, 'GL_MAX_VERTEX_UNIFORM_VECTORS', {
    get: function () {
      return GL_MAX_VERTEX_UNIFORM_VECTORS;
    }
  });
  Object.defineProperty(package$api, 'GL_MAX_VARYING_VECTORS', {
    get: function () {
      return GL_MAX_VARYING_VECTORS;
    }
  });
  Object.defineProperty(package$api, 'GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS', {
    get: function () {
      return GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS;
    }
  });
  Object.defineProperty(package$api, 'GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS', {
    get: function () {
      return GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS;
    }
  });
  Object.defineProperty(package$api, 'GL_MAX_TEXTURE_IMAGE_UNITS', {
    get: function () {
      return GL_MAX_TEXTURE_IMAGE_UNITS;
    }
  });
  Object.defineProperty(package$api, 'GL_MAX_FRAGMENT_UNIFORM_VECTORS', {
    get: function () {
      return GL_MAX_FRAGMENT_UNIFORM_VECTORS;
    }
  });
  Object.defineProperty(package$api, 'GL_SHADER_TYPE', {
    get: function () {
      return GL_SHADER_TYPE;
    }
  });
  Object.defineProperty(package$api, 'GL_DELETE_STATUS', {
    get: function () {
      return GL_DELETE_STATUS;
    }
  });
  Object.defineProperty(package$api, 'GL_LINK_STATUS', {
    get: function () {
      return GL_LINK_STATUS;
    }
  });
  Object.defineProperty(package$api, 'GL_VALIDATE_STATUS', {
    get: function () {
      return GL_VALIDATE_STATUS;
    }
  });
  Object.defineProperty(package$api, 'GL_ATTACHED_SHADERS', {
    get: function () {
      return GL_ATTACHED_SHADERS;
    }
  });
  Object.defineProperty(package$api, 'GL_ACTIVE_UNIFORMS', {
    get: function () {
      return GL_ACTIVE_UNIFORMS;
    }
  });
  Object.defineProperty(package$api, 'GL_ACTIVE_UNIFORM_MAX_LENGTH', {
    get: function () {
      return GL_ACTIVE_UNIFORM_MAX_LENGTH;
    }
  });
  Object.defineProperty(package$api, 'GL_ACTIVE_ATTRIBUTES', {
    get: function () {
      return GL_ACTIVE_ATTRIBUTES;
    }
  });
  Object.defineProperty(package$api, 'GL_ACTIVE_ATTRIBUTE_MAX_LENGTH', {
    get: function () {
      return GL_ACTIVE_ATTRIBUTE_MAX_LENGTH;
    }
  });
  Object.defineProperty(package$api, 'GL_SHADING_LANGUAGE_VERSION', {
    get: function () {
      return GL_SHADING_LANGUAGE_VERSION;
    }
  });
  Object.defineProperty(package$api, 'GL_CURRENT_PROGRAM', {
    get: function () {
      return GL_CURRENT_PROGRAM;
    }
  });
  Object.defineProperty(package$api, 'GL_NEVER', {
    get: function () {
      return GL_NEVER;
    }
  });
  Object.defineProperty(package$api, 'GL_LESS', {
    get: function () {
      return GL_LESS;
    }
  });
  Object.defineProperty(package$api, 'GL_EQUAL', {
    get: function () {
      return GL_EQUAL;
    }
  });
  Object.defineProperty(package$api, 'GL_LEQUAL', {
    get: function () {
      return GL_LEQUAL;
    }
  });
  Object.defineProperty(package$api, 'GL_GREATER', {
    get: function () {
      return GL_GREATER;
    }
  });
  Object.defineProperty(package$api, 'GL_NOTEQUAL', {
    get: function () {
      return GL_NOTEQUAL;
    }
  });
  Object.defineProperty(package$api, 'GL_GEQUAL', {
    get: function () {
      return GL_GEQUAL;
    }
  });
  Object.defineProperty(package$api, 'GL_ALWAYS', {
    get: function () {
      return GL_ALWAYS;
    }
  });
  Object.defineProperty(package$api, 'GL_KEEP', {
    get: function () {
      return GL_KEEP;
    }
  });
  Object.defineProperty(package$api, 'GL_REPLACE', {
    get: function () {
      return GL_REPLACE;
    }
  });
  Object.defineProperty(package$api, 'GL_INCR', {
    get: function () {
      return GL_INCR;
    }
  });
  Object.defineProperty(package$api, 'GL_DECR', {
    get: function () {
      return GL_DECR;
    }
  });
  Object.defineProperty(package$api, 'GL_INVERT', {
    get: function () {
      return GL_INVERT;
    }
  });
  Object.defineProperty(package$api, 'GL_INCR_WRAP', {
    get: function () {
      return GL_INCR_WRAP;
    }
  });
  Object.defineProperty(package$api, 'GL_DECR_WRAP', {
    get: function () {
      return GL_DECR_WRAP;
    }
  });
  Object.defineProperty(package$api, 'GL_VENDOR', {
    get: function () {
      return GL_VENDOR;
    }
  });
  Object.defineProperty(package$api, 'GL_RENDERER', {
    get: function () {
      return GL_RENDERER;
    }
  });
  Object.defineProperty(package$api, 'GL_VERSION', {
    get: function () {
      return GL_VERSION;
    }
  });
  Object.defineProperty(package$api, 'GL_EXTENSIONS', {
    get: function () {
      return GL_EXTENSIONS;
    }
  });
  Object.defineProperty(package$api, 'GL_NEAREST', {
    get: function () {
      return GL_NEAREST;
    }
  });
  Object.defineProperty(package$api, 'GL_LINEAR', {
    get: function () {
      return GL_LINEAR;
    }
  });
  Object.defineProperty(package$api, 'GL_NEAREST_MIPMAP_NEAREST', {
    get: function () {
      return GL_NEAREST_MIPMAP_NEAREST;
    }
  });
  Object.defineProperty(package$api, 'GL_LINEAR_MIPMAP_NEAREST', {
    get: function () {
      return GL_LINEAR_MIPMAP_NEAREST;
    }
  });
  Object.defineProperty(package$api, 'GL_NEAREST_MIPMAP_LINEAR', {
    get: function () {
      return GL_NEAREST_MIPMAP_LINEAR;
    }
  });
  Object.defineProperty(package$api, 'GL_LINEAR_MIPMAP_LINEAR', {
    get: function () {
      return GL_LINEAR_MIPMAP_LINEAR;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE_MAG_FILTER', {
    get: function () {
      return GL_TEXTURE_MAG_FILTER;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE_MIN_FILTER', {
    get: function () {
      return GL_TEXTURE_MIN_FILTER;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE_WRAP_S', {
    get: function () {
      return GL_TEXTURE_WRAP_S;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE_WRAP_T', {
    get: function () {
      return GL_TEXTURE_WRAP_T;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE', {
    get: function () {
      return GL_TEXTURE;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE_CUBE_MAP', {
    get: function () {
      return GL_TEXTURE_CUBE_MAP;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE_BINDING_CUBE_MAP', {
    get: function () {
      return GL_TEXTURE_BINDING_CUBE_MAP;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE_CUBE_MAP_POSITIVE_X', {
    get: function () {
      return GL_TEXTURE_CUBE_MAP_POSITIVE_X;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE_CUBE_MAP_NEGATIVE_X', {
    get: function () {
      return GL_TEXTURE_CUBE_MAP_NEGATIVE_X;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE_CUBE_MAP_POSITIVE_Y', {
    get: function () {
      return GL_TEXTURE_CUBE_MAP_POSITIVE_Y;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE_CUBE_MAP_NEGATIVE_Y', {
    get: function () {
      return GL_TEXTURE_CUBE_MAP_NEGATIVE_Y;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE_CUBE_MAP_POSITIVE_Z', {
    get: function () {
      return GL_TEXTURE_CUBE_MAP_POSITIVE_Z;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE_CUBE_MAP_NEGATIVE_Z', {
    get: function () {
      return GL_TEXTURE_CUBE_MAP_NEGATIVE_Z;
    }
  });
  Object.defineProperty(package$api, 'GL_MAX_CUBE_MAP_TEXTURE_SIZE', {
    get: function () {
      return GL_MAX_CUBE_MAP_TEXTURE_SIZE;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE0', {
    get: function () {
      return GL_TEXTURE0;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE1', {
    get: function () {
      return GL_TEXTURE1;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE2', {
    get: function () {
      return GL_TEXTURE2;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE3', {
    get: function () {
      return GL_TEXTURE3;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE4', {
    get: function () {
      return GL_TEXTURE4;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE5', {
    get: function () {
      return GL_TEXTURE5;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE6', {
    get: function () {
      return GL_TEXTURE6;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE7', {
    get: function () {
      return GL_TEXTURE7;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE8', {
    get: function () {
      return GL_TEXTURE8;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE9', {
    get: function () {
      return GL_TEXTURE9;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE10', {
    get: function () {
      return GL_TEXTURE10;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE11', {
    get: function () {
      return GL_TEXTURE11;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE12', {
    get: function () {
      return GL_TEXTURE12;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE13', {
    get: function () {
      return GL_TEXTURE13;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE14', {
    get: function () {
      return GL_TEXTURE14;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE15', {
    get: function () {
      return GL_TEXTURE15;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE16', {
    get: function () {
      return GL_TEXTURE16;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE17', {
    get: function () {
      return GL_TEXTURE17;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE18', {
    get: function () {
      return GL_TEXTURE18;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE19', {
    get: function () {
      return GL_TEXTURE19;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE20', {
    get: function () {
      return GL_TEXTURE20;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE21', {
    get: function () {
      return GL_TEXTURE21;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE22', {
    get: function () {
      return GL_TEXTURE22;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE23', {
    get: function () {
      return GL_TEXTURE23;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE24', {
    get: function () {
      return GL_TEXTURE24;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE25', {
    get: function () {
      return GL_TEXTURE25;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE26', {
    get: function () {
      return GL_TEXTURE26;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE27', {
    get: function () {
      return GL_TEXTURE27;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE28', {
    get: function () {
      return GL_TEXTURE28;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE29', {
    get: function () {
      return GL_TEXTURE29;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE30', {
    get: function () {
      return GL_TEXTURE30;
    }
  });
  Object.defineProperty(package$api, 'GL_TEXTURE31', {
    get: function () {
      return GL_TEXTURE31;
    }
  });
  Object.defineProperty(package$api, 'GL_ACTIVE_TEXTURE', {
    get: function () {
      return GL_ACTIVE_TEXTURE;
    }
  });
  Object.defineProperty(package$api, 'GL_REPEAT', {
    get: function () {
      return GL_REPEAT;
    }
  });
  Object.defineProperty(package$api, 'GL_CLAMP_TO_EDGE', {
    get: function () {
      return GL_CLAMP_TO_EDGE;
    }
  });
  Object.defineProperty(package$api, 'GL_MIRRORED_REPEAT', {
    get: function () {
      return GL_MIRRORED_REPEAT;
    }
  });
  Object.defineProperty(package$api, 'GL_FLOAT_VEC2', {
    get: function () {
      return GL_FLOAT_VEC2;
    }
  });
  Object.defineProperty(package$api, 'GL_FLOAT_VEC3', {
    get: function () {
      return GL_FLOAT_VEC3;
    }
  });
  Object.defineProperty(package$api, 'GL_FLOAT_VEC4', {
    get: function () {
      return GL_FLOAT_VEC4;
    }
  });
  Object.defineProperty(package$api, 'GL_INT_VEC2', {
    get: function () {
      return GL_INT_VEC2;
    }
  });
  Object.defineProperty(package$api, 'GL_INT_VEC3', {
    get: function () {
      return GL_INT_VEC3;
    }
  });
  Object.defineProperty(package$api, 'GL_INT_VEC4', {
    get: function () {
      return GL_INT_VEC4;
    }
  });
  Object.defineProperty(package$api, 'GL_BOOL', {
    get: function () {
      return GL_BOOL;
    }
  });
  Object.defineProperty(package$api, 'GL_BOOL_VEC2', {
    get: function () {
      return GL_BOOL_VEC2;
    }
  });
  Object.defineProperty(package$api, 'GL_BOOL_VEC3', {
    get: function () {
      return GL_BOOL_VEC3;
    }
  });
  Object.defineProperty(package$api, 'GL_BOOL_VEC4', {
    get: function () {
      return GL_BOOL_VEC4;
    }
  });
  Object.defineProperty(package$api, 'GL_FLOAT_MAT2', {
    get: function () {
      return GL_FLOAT_MAT2;
    }
  });
  Object.defineProperty(package$api, 'GL_FLOAT_MAT3', {
    get: function () {
      return GL_FLOAT_MAT3;
    }
  });
  Object.defineProperty(package$api, 'GL_FLOAT_MAT4', {
    get: function () {
      return GL_FLOAT_MAT4;
    }
  });
  Object.defineProperty(package$api, 'GL_SAMPLER_2D', {
    get: function () {
      return GL_SAMPLER_2D;
    }
  });
  Object.defineProperty(package$api, 'GL_SAMPLER_CUBE', {
    get: function () {
      return GL_SAMPLER_CUBE;
    }
  });
  Object.defineProperty(package$api, 'GL_VERTEX_ATTRIB_ARRAY_ENABLED', {
    get: function () {
      return GL_VERTEX_ATTRIB_ARRAY_ENABLED;
    }
  });
  Object.defineProperty(package$api, 'GL_VERTEX_ATTRIB_ARRAY_SIZE', {
    get: function () {
      return GL_VERTEX_ATTRIB_ARRAY_SIZE;
    }
  });
  Object.defineProperty(package$api, 'GL_VERTEX_ATTRIB_ARRAY_STRIDE', {
    get: function () {
      return GL_VERTEX_ATTRIB_ARRAY_STRIDE;
    }
  });
  Object.defineProperty(package$api, 'GL_VERTEX_ATTRIB_ARRAY_TYPE', {
    get: function () {
      return GL_VERTEX_ATTRIB_ARRAY_TYPE;
    }
  });
  Object.defineProperty(package$api, 'GL_VERTEX_ATTRIB_ARRAY_NORMALIZED', {
    get: function () {
      return GL_VERTEX_ATTRIB_ARRAY_NORMALIZED;
    }
  });
  Object.defineProperty(package$api, 'GL_VERTEX_ATTRIB_ARRAY_POINTER', {
    get: function () {
      return GL_VERTEX_ATTRIB_ARRAY_POINTER;
    }
  });
  Object.defineProperty(package$api, 'GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING', {
    get: function () {
      return GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING;
    }
  });
  Object.defineProperty(package$api, 'GL_IMPLEMENTATION_COLOR_READ_TYPE', {
    get: function () {
      return GL_IMPLEMENTATION_COLOR_READ_TYPE;
    }
  });
  Object.defineProperty(package$api, 'GL_IMPLEMENTATION_COLOR_READ_FORMAT', {
    get: function () {
      return GL_IMPLEMENTATION_COLOR_READ_FORMAT;
    }
  });
  Object.defineProperty(package$api, 'GL_COMPILE_STATUS', {
    get: function () {
      return GL_COMPILE_STATUS;
    }
  });
  Object.defineProperty(package$api, 'GL_INFO_LOG_LENGTH', {
    get: function () {
      return GL_INFO_LOG_LENGTH;
    }
  });
  Object.defineProperty(package$api, 'GL_SHADER_SOURCE_LENGTH', {
    get: function () {
      return GL_SHADER_SOURCE_LENGTH;
    }
  });
  Object.defineProperty(package$api, 'GL_SHADER_COMPILER', {
    get: function () {
      return GL_SHADER_COMPILER;
    }
  });
  Object.defineProperty(package$api, 'GL_SHADER_BINARY_FORMATS', {
    get: function () {
      return GL_SHADER_BINARY_FORMATS;
    }
  });
  Object.defineProperty(package$api, 'GL_NUM_SHADER_BINARY_FORMATS', {
    get: function () {
      return GL_NUM_SHADER_BINARY_FORMATS;
    }
  });
  Object.defineProperty(package$api, 'GL_LOW_FLOAT', {
    get: function () {
      return GL_LOW_FLOAT;
    }
  });
  Object.defineProperty(package$api, 'GL_MEDIUM_FLOAT', {
    get: function () {
      return GL_MEDIUM_FLOAT;
    }
  });
  Object.defineProperty(package$api, 'GL_HIGH_FLOAT', {
    get: function () {
      return GL_HIGH_FLOAT;
    }
  });
  Object.defineProperty(package$api, 'GL_LOW_INT', {
    get: function () {
      return GL_LOW_INT;
    }
  });
  Object.defineProperty(package$api, 'GL_MEDIUM_INT', {
    get: function () {
      return GL_MEDIUM_INT;
    }
  });
  Object.defineProperty(package$api, 'GL_HIGH_INT', {
    get: function () {
      return GL_HIGH_INT;
    }
  });
  Object.defineProperty(package$api, 'GL_FRAMEBUFFER', {
    get: function () {
      return GL_FRAMEBUFFER;
    }
  });
  Object.defineProperty(package$api, 'GL_RENDERBUFFER', {
    get: function () {
      return GL_RENDERBUFFER;
    }
  });
  Object.defineProperty(package$api, 'GL_RGBA4', {
    get: function () {
      return GL_RGBA4;
    }
  });
  Object.defineProperty(package$api, 'GL_RGB5_A1', {
    get: function () {
      return GL_RGB5_A1;
    }
  });
  Object.defineProperty(package$api, 'GL_RGB565', {
    get: function () {
      return GL_RGB565;
    }
  });
  Object.defineProperty(package$api, 'GL_DEPTH_COMPONENT16', {
    get: function () {
      return GL_DEPTH_COMPONENT16;
    }
  });
  Object.defineProperty(package$api, 'GL_STENCIL_INDEX8', {
    get: function () {
      return GL_STENCIL_INDEX8;
    }
  });
  Object.defineProperty(package$api, 'GL_RENDERBUFFER_WIDTH', {
    get: function () {
      return GL_RENDERBUFFER_WIDTH;
    }
  });
  Object.defineProperty(package$api, 'GL_RENDERBUFFER_HEIGHT', {
    get: function () {
      return GL_RENDERBUFFER_HEIGHT;
    }
  });
  Object.defineProperty(package$api, 'GL_RENDERBUFFER_INTERNAL_FORMAT', {
    get: function () {
      return GL_RENDERBUFFER_INTERNAL_FORMAT;
    }
  });
  Object.defineProperty(package$api, 'GL_RENDERBUFFER_RED_SIZE', {
    get: function () {
      return GL_RENDERBUFFER_RED_SIZE;
    }
  });
  Object.defineProperty(package$api, 'GL_RENDERBUFFER_GREEN_SIZE', {
    get: function () {
      return GL_RENDERBUFFER_GREEN_SIZE;
    }
  });
  Object.defineProperty(package$api, 'GL_RENDERBUFFER_BLUE_SIZE', {
    get: function () {
      return GL_RENDERBUFFER_BLUE_SIZE;
    }
  });
  Object.defineProperty(package$api, 'GL_RENDERBUFFER_ALPHA_SIZE', {
    get: function () {
      return GL_RENDERBUFFER_ALPHA_SIZE;
    }
  });
  Object.defineProperty(package$api, 'GL_RENDERBUFFER_DEPTH_SIZE', {
    get: function () {
      return GL_RENDERBUFFER_DEPTH_SIZE;
    }
  });
  Object.defineProperty(package$api, 'GL_RENDERBUFFER_STENCIL_SIZE', {
    get: function () {
      return GL_RENDERBUFFER_STENCIL_SIZE;
    }
  });
  Object.defineProperty(package$api, 'GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE', {
    get: function () {
      return GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE;
    }
  });
  Object.defineProperty(package$api, 'GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME', {
    get: function () {
      return GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME;
    }
  });
  Object.defineProperty(package$api, 'GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL', {
    get: function () {
      return GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL;
    }
  });
  Object.defineProperty(package$api, 'GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE', {
    get: function () {
      return GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE;
    }
  });
  Object.defineProperty(package$api, 'GL_COLOR_ATTACHMENT0', {
    get: function () {
      return GL_COLOR_ATTACHMENT0;
    }
  });
  Object.defineProperty(package$api, 'GL_DEPTH_ATTACHMENT', {
    get: function () {
      return GL_DEPTH_ATTACHMENT;
    }
  });
  Object.defineProperty(package$api, 'GL_STENCIL_ATTACHMENT', {
    get: function () {
      return GL_STENCIL_ATTACHMENT;
    }
  });
  Object.defineProperty(package$api, 'GL_NONE', {
    get: function () {
      return GL_NONE;
    }
  });
  Object.defineProperty(package$api, 'GL_FRAMEBUFFER_COMPLETE', {
    get: function () {
      return GL_FRAMEBUFFER_COMPLETE;
    }
  });
  Object.defineProperty(package$api, 'GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT', {
    get: function () {
      return GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT;
    }
  });
  Object.defineProperty(package$api, 'GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT', {
    get: function () {
      return GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT;
    }
  });
  Object.defineProperty(package$api, 'GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS', {
    get: function () {
      return GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS;
    }
  });
  Object.defineProperty(package$api, 'GL_FRAMEBUFFER_UNSUPPORTED', {
    get: function () {
      return GL_FRAMEBUFFER_UNSUPPORTED;
    }
  });
  Object.defineProperty(package$api, 'GL_FRAMEBUFFER_BINDING', {
    get: function () {
      return GL_FRAMEBUFFER_BINDING;
    }
  });
  Object.defineProperty(package$api, 'GL_RENDERBUFFER_BINDING', {
    get: function () {
      return GL_RENDERBUFFER_BINDING;
    }
  });
  Object.defineProperty(package$api, 'GL_MAX_RENDERBUFFER_SIZE', {
    get: function () {
      return GL_MAX_RENDERBUFFER_SIZE;
    }
  });
  Object.defineProperty(package$api, 'GL_INVALID_FRAMEBUFFER_OPERATION', {
    get: function () {
      return GL_INVALID_FRAMEBUFFER_OPERATION;
    }
  });
  var package$constant = package$gl.constant || (package$gl.constant = {});
  Object.defineProperty(package$constant, 'INT_BYTE_SIZE', {
    get: function () {
      return INT_BYTE_SIZE;
    }
  });
  Object.defineProperty(package$constant, 'FLOAT_BYTE_SIZE', {
    get: function () {
      return FLOAT_BYTE_SIZE;
    }
  });
  var package$error = package$gl.error || (package$gl.error = {});
  package$error.UnsupportedGLError = UnsupportedGLError;
  Object.defineProperty(DeviceInfo, 'Companion', {
    get: DeviceInfo$Companion_getInstance
  });
  package$gl.DeviceInfo = DeviceInfo;
  Object.defineProperty(package$api, 'gl', {
    get: gl_getInstance
  });
  var package$extension = package$gl.extension || (package$gl.extension = {});
  package$extension.toUint32Array_964n91$ = toUint32Array;
  package$extension.toUint8Array_964n91$ = toUint8Array;
  package$extension.toIntArray_2t43qp$ = toIntArray_0;
  package$extension.toFloatArray_948t6k$ = toFloatArray;
  var package$utility = package$gl.utility || (package$gl.utility = {});
  package$utility.WebGLMap = WebGLMap;
  GL_DEPTH_BUFFER_BIT = 256;
  GL_STENCIL_BUFFER_BIT = 1024;
  GL_COLOR_BUFFER_BIT = 16384;
  GL_FALSE = 0;
  GL_TRUE = 1;
  GL_POINTS = 0;
  GL_LINES = 1;
  GL_LINE_LOOP = 2;
  GL_LINE_STRIP = 3;
  GL_TRIANGLES = 4;
  GL_TRIANGLE_STRIP = 5;
  GL_TRIANGLE_FAN = 6;
  GL_ZERO = 0;
  GL_ONE = 1;
  GL_SRC_COLOR = 768;
  GL_ONE_MINUS_SRC_COLOR = 769;
  GL_SRC_ALPHA = 770;
  GL_ONE_MINUS_SRC_ALPHA = 771;
  GL_DST_ALPHA = 772;
  GL_ONE_MINUS_DST_ALPHA = 773;
  GL_DST_COLOR = 774;
  GL_ONE_MINUS_DST_COLOR = 775;
  GL_SRC_ALPHA_SATURATE = 776;
  GL_FUNC_ADD = 32774;
  GL_BLEND_EQUATION = 32777;
  GL_BLEND_EQUATION_RGB = 32777;
  GL_BLEND_EQUATION_ALPHA = 34877;
  GL_FUNC_SUBTRACT = 32778;
  GL_FUNC_REVERSE_SUBTRACT = 32779;
  GL_BLEND_DST_RGB = 32968;
  GL_BLEND_SRC_RGB = 32969;
  GL_BLEND_DST_ALPHA = 32970;
  GL_BLEND_SRC_ALPHA = 32971;
  GL_CONSTANT_COLOR = 32769;
  GL_ONE_MINUS_CONSTANT_COLOR = 32770;
  GL_CONSTANT_ALPHA = 32771;
  GL_ONE_MINUS_CONSTANT_ALPHA = 32772;
  GL_BLEND_COLOR = 32773;
  GL_ARRAY_BUFFER = 34962;
  GL_ELEMENT_ARRAY_BUFFER = 34963;
  GL_ARRAY_BUFFER_BINDING = 34964;
  GL_ELEMENT_ARRAY_BUFFER_BINDING = 34965;
  GL_STREAM_DRAW = 35040;
  GL_STATIC_DRAW = 35044;
  GL_DYNAMIC_DRAW = 35048;
  GL_BUFFER_SIZE = 34660;
  GL_BUFFER_USAGE = 34661;
  GL_CURRENT_VERTEX_ATTRIB = 34342;
  GL_FRONT = 1028;
  GL_BACK = 1029;
  GL_FRONT_AND_BACK = 1032;
  GL_TEXTURE_2D = 3553;
  GL_CULL_FACE = 2884;
  GL_BLEND = 3042;
  GL_DITHER = 3024;
  GL_STENCIL_TEST = 2960;
  GL_DEPTH_TEST = 2929;
  GL_SCISSOR_TEST = 3089;
  GL_POLYGON_OFFSET_FILL = 32823;
  GL_SAMPLE_ALPHA_TO_COVERAGE = 32926;
  GL_SAMPLE_COVERAGE = 32928;
  GL_NO_ERROR = 0;
  GL_INVALID_ENUM = 1280;
  GL_INVALID_VALUE = 1281;
  GL_INVALID_OPERATION = 1282;
  GL_OUT_OF_MEMORY = 1285;
  GL_CW = 2304;
  GL_CCW = 2305;
  GL_LINE_WIDTH = 2849;
  GL_ALIASED_POINT_SIZE_RANGE = 33901;
  GL_ALIASED_LINE_WIDTH_RANGE = 33902;
  GL_CULL_FACE_MODE = 2885;
  GL_FRONT_FACE = 2886;
  GL_DEPTH_RANGE = 2928;
  GL_DEPTH_WRITEMASK = 2930;
  GL_DEPTH_CLEAR_VALUE = 2931;
  GL_DEPTH_FUNC = 2932;
  GL_STENCIL_CLEAR_VALUE = 2961;
  GL_STENCIL_FUNC = 2962;
  GL_STENCIL_FAIL = 2964;
  GL_STENCIL_PASS_DEPTH_FAIL = 2965;
  GL_STENCIL_PASS_DEPTH_PASS = 2966;
  GL_STENCIL_REF = 2967;
  GL_STENCIL_VALUE_MASK = 2963;
  GL_STENCIL_WRITEMASK = 2968;
  GL_STENCIL_BACK_FUNC = 34816;
  GL_STENCIL_BACK_FAIL = 34817;
  GL_STENCIL_BACK_PASS_DEPTH_FAIL = 34818;
  GL_STENCIL_BACK_PASS_DEPTH_PASS = 34819;
  GL_STENCIL_BACK_REF = 36003;
  GL_STENCIL_BACK_VALUE_MASK = 36004;
  GL_STENCIL_BACK_WRITEMASK = 36005;
  GL_VIEWPORT = 2978;
  GL_SCISSOR_BOX = 3088;
  GL_COLOR_CLEAR_VALUE = 3106;
  GL_COLOR_WRITEMASK = 3107;
  GL_UNPACK_ALIGNMENT = 3317;
  GL_PACK_ALIGNMENT = 3333;
  GL_MAX_TEXTURE_SIZE = 3379;
  GL_MAX_VIEWPORT_DIMS = 3386;
  GL_SUBPIXEL_BITS = 3408;
  GL_RED_BITS = 3410;
  GL_GREEN_BITS = 3411;
  GL_BLUE_BITS = 3412;
  GL_ALPHA_BITS = 3413;
  GL_DEPTH_BITS = 3414;
  GL_STENCIL_BITS = 3415;
  GL_POLYGON_OFFSET_UNITS = 10752;
  GL_POLYGON_OFFSET_FACTOR = 32824;
  GL_TEXTURE_BINDING_2D = 32873;
  GL_SAMPLE_BUFFERS = 32936;
  GL_SAMPLES = 32937;
  GL_SAMPLE_COVERAGE_VALUE = 32938;
  GL_SAMPLE_COVERAGE_INVERT = 32939;
  GL_NUM_COMPRESSED_TEXTURE_FORMATS = 34466;
  GL_COMPRESSED_TEXTURE_FORMATS = 34467;
  GL_DONT_CARE = 4352;
  GL_FASTEST = 4353;
  GL_NICEST = 4354;
  GL_GENERATE_MIPMAP_HINT = 33170;
  GL_BYTE = 5120;
  GL_UNSIGNED_BYTE = 5121;
  GL_SHORT = 5122;
  GL_UNSIGNED_SHORT = 5123;
  GL_INT = 5124;
  GL_UNSIGNED_INT = 5125;
  GL_FLOAT = 5126;
  GL_FIXED = 5132;
  GL_DEPTH_COMPONENT = 6402;
  GL_ALPHA = 6406;
  GL_RGB = 6407;
  GL_RGBA = 6408;
  GL_LUMINANCE = 6409;
  GL_LUMINANCE_ALPHA = 6410;
  GL_UNSIGNED_SHORT_4_4_4_4 = 32819;
  GL_UNSIGNED_SHORT_5_5_5_1 = 32820;
  GL_UNSIGNED_SHORT_5_6_5 = 33635;
  GL_FRAGMENT_SHADER = 35632;
  GL_VERTEX_SHADER = 35633;
  GL_MAX_VERTEX_ATTRIBS = 34921;
  GL_MAX_VERTEX_UNIFORM_VECTORS = 36347;
  GL_MAX_VARYING_VECTORS = 36348;
  GL_MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661;
  GL_MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660;
  GL_MAX_TEXTURE_IMAGE_UNITS = 34930;
  GL_MAX_FRAGMENT_UNIFORM_VECTORS = 36349;
  GL_SHADER_TYPE = 35663;
  GL_DELETE_STATUS = 35712;
  GL_LINK_STATUS = 35714;
  GL_VALIDATE_STATUS = 35715;
  GL_ATTACHED_SHADERS = 35717;
  GL_ACTIVE_UNIFORMS = 35718;
  GL_ACTIVE_UNIFORM_MAX_LENGTH = 35719;
  GL_ACTIVE_ATTRIBUTES = 35721;
  GL_ACTIVE_ATTRIBUTE_MAX_LENGTH = 35722;
  GL_SHADING_LANGUAGE_VERSION = 35724;
  GL_CURRENT_PROGRAM = 35725;
  GL_NEVER = 512;
  GL_LESS = 513;
  GL_EQUAL = 514;
  GL_LEQUAL = 515;
  GL_GREATER = 516;
  GL_NOTEQUAL = 517;
  GL_GEQUAL = 518;
  GL_ALWAYS = 519;
  GL_KEEP = 7680;
  GL_REPLACE = 7681;
  GL_INCR = 7682;
  GL_DECR = 7683;
  GL_INVERT = 5386;
  GL_INCR_WRAP = 34055;
  GL_DECR_WRAP = 34056;
  GL_VENDOR = 7936;
  GL_RENDERER = 7937;
  GL_VERSION = 7938;
  GL_EXTENSIONS = 7939;
  GL_NEAREST = 9728;
  GL_LINEAR = 9729;
  GL_NEAREST_MIPMAP_NEAREST = 9984;
  GL_LINEAR_MIPMAP_NEAREST = 9985;
  GL_NEAREST_MIPMAP_LINEAR = 9986;
  GL_LINEAR_MIPMAP_LINEAR = 9987;
  GL_TEXTURE_MAG_FILTER = 10240;
  GL_TEXTURE_MIN_FILTER = 10241;
  GL_TEXTURE_WRAP_S = 10242;
  GL_TEXTURE_WRAP_T = 10243;
  GL_TEXTURE = 5890;
  GL_TEXTURE_CUBE_MAP = 34067;
  GL_TEXTURE_BINDING_CUBE_MAP = 34068;
  GL_TEXTURE_CUBE_MAP_POSITIVE_X = 34069;
  GL_TEXTURE_CUBE_MAP_NEGATIVE_X = 34070;
  GL_TEXTURE_CUBE_MAP_POSITIVE_Y = 34071;
  GL_TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072;
  GL_TEXTURE_CUBE_MAP_POSITIVE_Z = 34073;
  GL_TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074;
  GL_MAX_CUBE_MAP_TEXTURE_SIZE = 34076;
  GL_TEXTURE0 = 33984;
  GL_TEXTURE1 = 33985;
  GL_TEXTURE2 = 33986;
  GL_TEXTURE3 = 33987;
  GL_TEXTURE4 = 33988;
  GL_TEXTURE5 = 33989;
  GL_TEXTURE6 = 33990;
  GL_TEXTURE7 = 33991;
  GL_TEXTURE8 = 33992;
  GL_TEXTURE9 = 33993;
  GL_TEXTURE10 = 33994;
  GL_TEXTURE11 = 33995;
  GL_TEXTURE12 = 33996;
  GL_TEXTURE13 = 33997;
  GL_TEXTURE14 = 33998;
  GL_TEXTURE15 = 33999;
  GL_TEXTURE16 = 34000;
  GL_TEXTURE17 = 34001;
  GL_TEXTURE18 = 34002;
  GL_TEXTURE19 = 34003;
  GL_TEXTURE20 = 34004;
  GL_TEXTURE21 = 34005;
  GL_TEXTURE22 = 34006;
  GL_TEXTURE23 = 34007;
  GL_TEXTURE24 = 34008;
  GL_TEXTURE25 = 34009;
  GL_TEXTURE26 = 34010;
  GL_TEXTURE27 = 34011;
  GL_TEXTURE28 = 34012;
  GL_TEXTURE29 = 34013;
  GL_TEXTURE30 = 34014;
  GL_TEXTURE31 = 34015;
  GL_ACTIVE_TEXTURE = 34016;
  GL_REPEAT = 10497;
  GL_CLAMP_TO_EDGE = 33071;
  GL_MIRRORED_REPEAT = 33648;
  GL_FLOAT_VEC2 = 35664;
  GL_FLOAT_VEC3 = 35665;
  GL_FLOAT_VEC4 = 35666;
  GL_INT_VEC2 = 35667;
  GL_INT_VEC3 = 35668;
  GL_INT_VEC4 = 35669;
  GL_BOOL = 35670;
  GL_BOOL_VEC2 = 35671;
  GL_BOOL_VEC3 = 35672;
  GL_BOOL_VEC4 = 35673;
  GL_FLOAT_MAT2 = 35674;
  GL_FLOAT_MAT3 = 35675;
  GL_FLOAT_MAT4 = 35676;
  GL_SAMPLER_2D = 35678;
  GL_SAMPLER_CUBE = 35680;
  GL_VERTEX_ATTRIB_ARRAY_ENABLED = 34338;
  GL_VERTEX_ATTRIB_ARRAY_SIZE = 34339;
  GL_VERTEX_ATTRIB_ARRAY_STRIDE = 34340;
  GL_VERTEX_ATTRIB_ARRAY_TYPE = 34341;
  GL_VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922;
  GL_VERTEX_ATTRIB_ARRAY_POINTER = 34373;
  GL_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975;
  GL_IMPLEMENTATION_COLOR_READ_TYPE = 35738;
  GL_IMPLEMENTATION_COLOR_READ_FORMAT = 35739;
  GL_COMPILE_STATUS = 35713;
  GL_INFO_LOG_LENGTH = 35716;
  GL_SHADER_SOURCE_LENGTH = 35720;
  GL_SHADER_COMPILER = 36346;
  GL_SHADER_BINARY_FORMATS = 36344;
  GL_NUM_SHADER_BINARY_FORMATS = 36345;
  GL_LOW_FLOAT = 36336;
  GL_MEDIUM_FLOAT = 36337;
  GL_HIGH_FLOAT = 36338;
  GL_LOW_INT = 36339;
  GL_MEDIUM_INT = 36340;
  GL_HIGH_INT = 36341;
  GL_FRAMEBUFFER = 36160;
  GL_RENDERBUFFER = 36161;
  GL_RGBA4 = 32854;
  GL_RGB5_A1 = 32855;
  GL_RGB565 = 36194;
  GL_DEPTH_COMPONENT16 = 33189;
  GL_STENCIL_INDEX8 = 36168;
  GL_RENDERBUFFER_WIDTH = 36162;
  GL_RENDERBUFFER_HEIGHT = 36163;
  GL_RENDERBUFFER_INTERNAL_FORMAT = 36164;
  GL_RENDERBUFFER_RED_SIZE = 36176;
  GL_RENDERBUFFER_GREEN_SIZE = 36177;
  GL_RENDERBUFFER_BLUE_SIZE = 36178;
  GL_RENDERBUFFER_ALPHA_SIZE = 36179;
  GL_RENDERBUFFER_DEPTH_SIZE = 36180;
  GL_RENDERBUFFER_STENCIL_SIZE = 36181;
  GL_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048;
  GL_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049;
  GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050;
  GL_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051;
  GL_COLOR_ATTACHMENT0 = 36064;
  GL_DEPTH_ATTACHMENT = 36096;
  GL_STENCIL_ATTACHMENT = 36128;
  GL_NONE = 0;
  GL_FRAMEBUFFER_COMPLETE = 36053;
  GL_FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054;
  GL_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055;
  GL_FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057;
  GL_FRAMEBUFFER_UNSUPPORTED = 36061;
  GL_FRAMEBUFFER_BINDING = 36006;
  GL_RENDERBUFFER_BINDING = 36007;
  GL_MAX_RENDERBUFFER_SIZE = 34024;
  GL_INVALID_FRAMEBUFFER_OPERATION = 1286;
  INT_BYTE_SIZE = 4;
  FLOAT_BYTE_SIZE = 4;
  Kotlin.defineModule('kotlin-gl', _);
  return _;
}));

//# sourceMappingURL=kotlin-gl.js.map
