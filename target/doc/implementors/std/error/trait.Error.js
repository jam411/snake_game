(function() {var implementors = {};
implementors["core_foundation"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"core_foundation/error/struct.CFError.html\" title=\"struct core_foundation::error::CFError\">CFError</a>","synthetic":false,"types":["core_foundation::error::CFError"]}];
implementors["crossbeam_channel"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"crossbeam_channel/struct.SendError.html\" title=\"struct crossbeam_channel::SendError\">SendError</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_channel::err::SendError"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"crossbeam_channel/enum.TrySendError.html\" title=\"enum crossbeam_channel::TrySendError\">TrySendError</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_channel::err::TrySendError"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"crossbeam_channel/enum.SendTimeoutError.html\" title=\"enum crossbeam_channel::SendTimeoutError\">SendTimeoutError</a>&lt;T&gt;","synthetic":false,"types":["crossbeam_channel::err::SendTimeoutError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"crossbeam_channel/struct.RecvError.html\" title=\"struct crossbeam_channel::RecvError\">RecvError</a>","synthetic":false,"types":["crossbeam_channel::err::RecvError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"crossbeam_channel/enum.TryRecvError.html\" title=\"enum crossbeam_channel::TryRecvError\">TryRecvError</a>","synthetic":false,"types":["crossbeam_channel::err::TryRecvError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"crossbeam_channel/enum.RecvTimeoutError.html\" title=\"enum crossbeam_channel::RecvTimeoutError\">RecvTimeoutError</a>","synthetic":false,"types":["crossbeam_channel::err::RecvTimeoutError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"crossbeam_channel/struct.TrySelectError.html\" title=\"struct crossbeam_channel::TrySelectError\">TrySelectError</a>","synthetic":false,"types":["crossbeam_channel::err::TrySelectError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"crossbeam_channel/struct.SelectTimeoutError.html\" title=\"struct crossbeam_channel::SelectTimeoutError\">SelectTimeoutError</a>","synthetic":false,"types":["crossbeam_channel::err::SelectTimeoutError"]}];
implementors["dispatch"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"dispatch/struct.WaitTimeout.html\" title=\"struct dispatch::WaitTimeout\">WaitTimeout</a>","synthetic":false,"types":["dispatch::WaitTimeout"]}];
implementors["gif"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"gif/struct.DecodingFormatError.html\" title=\"struct gif::DecodingFormatError\">DecodingFormatError</a>","synthetic":false,"types":["gif::reader::decoder::DecodingFormatError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"gif/enum.DecodingError.html\" title=\"enum gif::DecodingError\">DecodingError</a>","synthetic":false,"types":["gif::reader::decoder::DecodingError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"gif/enum.EncodingError.html\" title=\"enum gif::EncodingError\">EncodingError</a>","synthetic":false,"types":["gif::encoder::EncodingError"]}];
implementors["glutin"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"glutin/enum.CreationError.html\" title=\"enum glutin::CreationError\">CreationError</a>","synthetic":false,"types":["glutin::CreationError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"glutin/enum.ContextError.html\" title=\"enum glutin::ContextError\">ContextError</a>","synthetic":false,"types":["glutin::ContextError"]}];
implementors["graphics_api_version"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"graphics_api_version/struct.UnsupportedGraphicsApiError.html\" title=\"struct graphics_api_version::UnsupportedGraphicsApiError\">UnsupportedGraphicsApiError</a>","synthetic":false,"types":["graphics_api_version::UnsupportedGraphicsApiError"]}];
implementors["image"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"image/error/enum.ImageError.html\" title=\"enum image::error::ImageError\">ImageError</a>","synthetic":false,"types":["image::error::ImageError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"image/error/struct.UnsupportedError.html\" title=\"struct image::error::UnsupportedError\">UnsupportedError</a>","synthetic":false,"types":["image::error::UnsupportedError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"image/error/struct.ParameterError.html\" title=\"struct image::error::ParameterError\">ParameterError</a>","synthetic":false,"types":["image::error::ParameterError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"image/error/struct.EncodingError.html\" title=\"struct image::error::EncodingError\">EncodingError</a>","synthetic":false,"types":["image::error::EncodingError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"image/error/struct.DecodingError.html\" title=\"struct image::error::DecodingError\">DecodingError</a>","synthetic":false,"types":["image::error::DecodingError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"image/error/struct.LimitError.html\" title=\"struct image::error::LimitError\">LimitError</a>","synthetic":false,"types":["image::error::LimitError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"image/flat/enum.Error.html\" title=\"enum image::flat::Error\">Error</a>","synthetic":false,"types":["image::flat::Error"]}];
implementors["jpeg_decoder"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"jpeg_decoder/enum.Error.html\" title=\"enum jpeg_decoder::Error\">Error</a>","synthetic":false,"types":["jpeg_decoder::error::Error"]}];
implementors["objc"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"objc/struct.MessageError.html\" title=\"struct objc::MessageError\">MessageError</a>","synthetic":false,"types":["objc::message::MessageError"]}];
implementors["png"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"png/enum.DecodingError.html\" title=\"enum png::DecodingError\">DecodingError</a>","synthetic":false,"types":["png::decoder::stream::DecodingError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"png/enum.EncodingError.html\" title=\"enum png::EncodingError\">EncodingError</a>","synthetic":false,"types":["png::encoder::EncodingError"]}];
implementors["proc_macro2"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"proc_macro2/struct.LexError.html\" title=\"struct proc_macro2::LexError\">LexError</a>","synthetic":false,"types":["proc_macro2::LexError"]}];
implementors["rayon_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"rayon_core/struct.ThreadPoolBuildError.html\" title=\"struct rayon_core::ThreadPoolBuildError\">ThreadPoolBuildError</a>","synthetic":false,"types":["rayon_core::ThreadPoolBuildError"]}];
implementors["serde"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"serde/de/value/struct.Error.html\" title=\"struct serde::de::value::Error\">Error</a>","synthetic":false,"types":["serde::de::value::Error"]}];
implementors["shader_version"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"shader_version/opengl/struct.ParseOpenGLError.html\" title=\"struct shader_version::opengl::ParseOpenGLError\">ParseOpenGLError</a>","synthetic":false,"types":["shader_version::opengl::ParseOpenGLError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"shader_version/glsl/struct.ParseGLSLError.html\" title=\"struct shader_version::glsl::ParseGLSLError\">ParseGLSLError</a>","synthetic":false,"types":["shader_version::glsl::ParseGLSLError"]}];
implementors["syn"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"syn/parse/struct.Error.html\" title=\"struct syn::parse::Error\">Error</a>","synthetic":false,"types":["syn::error::Error"]}];
implementors["tiff"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"tiff/enum.TiffError.html\" title=\"enum tiff::TiffError\">TiffError</a>","synthetic":false,"types":["tiff::error::TiffError"]}];
implementors["weezl"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"weezl/enum.LzwError.html\" title=\"enum weezl::LzwError\">LzwError</a>","synthetic":false,"types":["weezl::error::LzwError"]}];
implementors["winit"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"winit/error/struct.OsError.html\" title=\"struct winit::error::OsError\">OsError</a>","synthetic":false,"types":["winit::error::OsError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"winit/error/enum.ExternalError.html\" title=\"enum winit::error::ExternalError\">ExternalError</a>","synthetic":false,"types":["winit::error::ExternalError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"winit/error/struct.NotSupportedError.html\" title=\"struct winit::error::NotSupportedError\">NotSupportedError</a>","synthetic":false,"types":["winit::error::NotSupportedError"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"struct\" href=\"winit/event_loop/struct.EventLoopClosed.html\" title=\"struct winit::event_loop::EventLoopClosed\">EventLoopClosed</a>&lt;T&gt;","synthetic":false,"types":["winit::event_loop::EventLoopClosed"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"winit/window/enum.BadIcon.html\" title=\"enum winit::window::BadIcon\">BadIcon</a>","synthetic":false,"types":["winit::icon::BadIcon"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()