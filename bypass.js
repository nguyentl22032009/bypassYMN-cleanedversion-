(async function () {
  const _0x3db5a9 = function () {
    let _0x5a3265 = true;
    return function (_0x452e95, _0x371ff3) {
      const _0x3ad100 = _0x5a3265 ? function () {
        if (_0x371ff3) {
          const _0x7dfedf = _0x371ff3.apply(_0x452e95, arguments);
          _0x371ff3 = null;
          return _0x7dfedf;
        }
      } : function () {};
      _0x5a3265 = false;
      return _0x3ad100;
    };
  }();
  const _0x4b9b2a = function () {
    let _0x1c211c = true;
    return function (_0x3997ef, _0xd6426d) {
      const _0x22be58 = _0x1c211c ? function () {
        if (_0xd6426d) {
          const _0x239d48 = _0xd6426d.apply(_0x3997ef, arguments);
          _0xd6426d = null;
          return _0x239d48;
        }
      } : function () {};
      _0x1c211c = false;
      return _0x22be58;
    };
  }();
  const _0x5c3c03 = function () {
    let _0x4d0b4b = true;
    return function (_0x5f16dc, _0x371dc5) {
      const _0xe3f051 = {
        EaIPE: "Lỗi sao chép:"
      };
      _0xe3f051.NKRNs = "Lỗi khi sao chép code!";
      const _0x402d6c = _0x4d0b4b ? function () {
        if (_0x371dc5) {
          const _0x568447 = _0x371dc5.apply(_0x5f16dc, arguments);
          _0x371dc5 = null;
          return _0x568447;
        }
      } : function () {};
      _0x4d0b4b = false;
      return _0x402d6c;
    };
  }();
  'use strict';
  async function _0x41564a() {
    let _0x43aaba = localStorage.getItem("deviceID");
    if (!_0x43aaba) {
      const _0x54baba = navigator.userAgent;
      const _0x661071 = navigator.platform;
      const _0x31e645 = navigator.language;
      const _0x270502 = _0x54baba + _0x661071 + _0x31e645;
      const _0x504c4c = new TextEncoder();
      const _0x1b15a5 = _0x504c4c.encode(_0x270502);
      const _0x30b22a = await crypto.subtle.digest("SHA-256", _0x1b15a5);
      const _0x319c6a = Array.from(new Uint8Array(_0x30b22a));
      const _0x63f678 = _0x319c6a.map(_0x4231dc => _0x4231dc.toString(16).padStart(2, '0')).join('');
      _0x43aaba = _0x63f678.substring(0, 16);
      localStorage.setItem("deviceID", _0x43aaba);
    }
    return _0x43aaba;
  }
  async function _0x2880b4() {
    try {
      const _0x21fdcc = await fetch("https://api64.ipify.org?format=json", {
        'cache': "no-store"
      });
      if (!_0x21fdcc.ok) {
        throw new Error("Không thể lấy IP");
      }
      const _0x489168 = await _0x21fdcc.json();
      return _0x489168.ip;
    } catch (_0x15a5c7) {
      console.error("Lỗi lấy IP:", _0x15a5c7);
      return "Không xác định";
    }
  }
  function _0x4f67de(_0x1fc5f2, _0x4d145f, _0x31b213) {
  
  }
  (async function () {
    const _0x4ad4cf = _0x3db5a9(this, function () {
      return _0x4ad4cf.toString().search("(((.+)+)+)+$").toString().constructor(_0x4ad4cf).search("(((.+)+)+)+$");
    });
    _0x4ad4cf();
    (function () {
      _0x4b9b2a(this, function () {
        const _0xa556c7 = new RegExp("function *\\( *\\)");
        const _0x56d282 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
        const _0x5ed9ea = _0x26a67d("init");
        if (!_0xa556c7.test(_0x5ed9ea + "chain") || !_0x56d282.test(_0x5ed9ea + "input")) {
          _0x5ed9ea('0');
        } else {
          _0x26a67d();
        }
      })();
    })();
    const _0x13b4c3 = _0x5c3c03(this, function () {
      const _0x358469 = function () {
        let _0x109ed7;
        try {
          _0x109ed7 = Function("return (function() {}.constructor(\"return this\")( ));")();
        } catch (_0x46c25d) {
          _0x109ed7 = window;
        }
        return _0x109ed7;
      };
      const _0x58417b = _0x358469();
      const _0x172f64 = _0x58417b.console = _0x58417b.console || {};
      const _0x342876 = ["log", "warn", "info", "error", "exception", "table", "trace"];
      for (let _0x1221a3 = 0; _0x1221a3 < _0x342876.length; _0x1221a3++) {
        const _0x269669 = _0x5c3c03.constructor.prototype.bind(_0x5c3c03);
        const _0x578ea6 = _0x342876[_0x1221a3];
        const _0x37eb57 = _0x172f64[_0x578ea6] || _0x269669;
        _0x269669.__proto__ = _0x5c3c03.bind(_0x5c3c03);
        _0x269669.toString = _0x37eb57.toString.bind(_0x37eb57);
        _0x172f64[_0x578ea6] = _0x269669;
      }
    });
    _0x13b4c3();
    const _0xe13fdc = await _0x2880b4();
    const _0x5a6762 = await _0x41564a();
    let _0x158633 = JSON.parse(localStorage.getItem("deviceUsage")) || {};
    const _0x33394d = _0x5a6762 + '-' + _0xe13fdc;
    const _0x4015db = (_0x158633[_0x33394d] || 0) + 1;
    _0x158633[_0x33394d] = _0x4015db;
    localStorage.setItem("deviceUsage", JSON.stringify(_0x158633));
    //_0x4f67de(_0x5a6762, _0xe13fdc, _0x4015db);
  })();
  function _0x132731() {
    console.log("Đang đổi nhiệm vụ...");
    const _0xac635c = document.querySelector("#btn-baoloi");
    if (!_0xac635c) {
      return false;
    }
    _0xac635c.click();
    setTimeout(() => {
      const _0x4f3282 = document.querySelector("#lydo_doima > center > a:nth-child(2)");
      if (_0x4f3282) {
        _0x4f3282.click();
      }
      setTimeout(() => {
        const _0x3f77b9 = document.querySelector("#lydo_doima > label:nth-child(8) > input[type=radio]");
        if (_0x3f77b9) {
          _0x3f77b9.click();
        }
        setTimeout(() => {
          const _0x121105 = document.querySelector("#dongy_doima > a");
          if (_0x121105) {
            _0x121105.click();
            return true;
          }
          return false;
        }, 500);
      }, 500);
    }, 500);
    return true;
  }
  function _0x220a77() {
    return new Promise(async (_0x321eef, _0x534006) => {
      const _0x3db2cd = ["K81664733488957", "K88342551688957", "K83817782788957"];
      const _0x1ae4ea = document.querySelector("p#TK1").textContent.trim().toLowerCase();
      const _0x592911 = document.querySelector("img#halt_nv") || document.querySelector("img#hinh_nv");
      const _0x3ad1a5 = _0x592911 ? _0x592911.src : null;
      if (_0x3ad1a5.includes("placehold.co")) {
        setTimeout(() => _0x220a77().then(_0x321eef)["catch"](_0x534006), 100);
        return;
      }
      async function _0x38bf8e(_0x539807) {
        const _0x1be1ae = "https://api.ocr.space/parse/imageurl?apikey=" + _0x539807 + "&isOverlayRequired=true&OCREngine=2&url=" + _0x3ad1a5;
        return new Promise((_0x57be2a, _0x1739a2) => {
          const _0x17ed3d = new XMLHttpRequest();
          _0x17ed3d.open("GET", _0x1be1ae, true);
          _0x17ed3d.onload = function () {
            if (_0x17ed3d.status === 200) {
              const _0x397643 = JSON.parse(_0x17ed3d.responseText);
              if (_0x397643.ParsedResults && _0x397643.ParsedResults.length > 0) {
                _0x57be2a(_0x397643);
              } else {
                _0x1739a2("Không nhận được dữ liệu từ OCR");
              }
            } else {
              _0x1739a2("Lỗi khi tải dữ liệu: " + _0x17ed3d.status);
            }
          };
          _0x17ed3d.onerror = () => _0x1739a2("Lỗi mạng khi gọi OCR API");
          _0x17ed3d.send();
        });
      }
      let _0x364c80;
      for (let _0x2f981e = 0; _0x2f981e < _0x3db2cd.length; _0x2f981e++) {
        try {
          console.log("Đang thử OCR API " + (_0x2f981e + 1) + " với key: " + _0x3db2cd[_0x2f981e]);
          _0x364c80 = await _0x38bf8e(_0x3db2cd[_0x2f981e]);
          break;
        } catch (_0xd0b7f4) {
          console.error("OCR API " + (_0x2f981e + 1) + " thất bại:", _0xd0b7f4);
          if (_0x2f981e === _0x3db2cd.length - 1) {
            _0x534006("Tất cả API OCR đều thất bại!");
            return;
          }
        }
      }
      const _0x38fe94 = _0x364c80.ParsedResults[0];
      const _0x3bc6d4 = _0x38fe94.TextOverlay.Lines.filter(_0x10252b => _0x10252b.LineText.match(/\b[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+\b/) && _0x10252b.Words && _0x10252b.Words.some(_0x29ec71 => _0x29ec71.Top < 170)).map(_0x47db9f => _0x47db9f.LineText);
      let _0x555980 = '';
      if (_0x1ae4ea === "188bet") {
        _0x555980 = "https://165.22.63.250" + _0x3bc6d4 + '/';
      } else {
        if (_0x1ae4ea === "w88") {
          _0x555980 = "https://188.166.185.213/";
        } else {
          if (_0x1ae4ea === "bk8") {
            _0x555980 = "https://188.166.189.40/";
          } else {
            if (_0x1ae4ea === "fb88") {
              _0x555980 = "https://fb88" + _0x3bc6d4 + '/';
            } else {
              if (_0x1ae4ea === "m88") {
                _0x555980 = "https://bet88" + _0x3bc6d4 + '/';
              } else {
                if (_0x1ae4ea === "vn88") {
                  _0x555980 = "https://139.59.238.116/";
                } else {
                  if (_0x1ae4ea === "v9bet") {
                    _0x555980 = "https://v9bet" + _0x3bc6d4 + '/';
                  } else {
                    _0x555980 = "Chưa nhận diện được URL!";
                  }
                }
              }
            }
          }
        }
      }
      _0x321eef(_0x555980);
    });
  }
  function _0x97f9b7(_0x3634c5) {
    const _0x371521 = Date.now();
    return _0x371521 + ',' + "https://www.google.com/" + ',' + _0x3634c5 + ",IOS900,hidden,null";
  }
  async function _0x6a91f6(_0x2ca575 = null) {
    try {
      let _0xd3d04 = "https://api.proxyscrape.com/v3/free-proxy-list/get?request=displayproxies&proxytype=http&timeout=5000&anonymity=elite";
      if (_0x2ca575) {
        _0xd3d04 += "&country=" + _0x2ca575;
      }
      const _0x6daf3a = await fetch(_0xd3d04, {
        'cache': "no-store"
      });
      if (!_0x6daf3a.ok) {
        throw new Error("Không thể lấy proxy từ API");
      }
      const _0x57e3cd = await _0x6daf3a.text();
      const _0x21aad2 = _0x57e3cd.trim().split("\n");
      if (_0x21aad2.length === 0) {
        throw new Error("Không có proxy khả dụng");
      }
      const _0x22449b = _0x21aad2[Math.floor(Math.random() * _0x21aad2.length)];
      const [_0x180355, _0x12fa1c] = _0x22449b.split(':');
      const _0x40986d = {
        ip: _0x180355,
        port: _0x12fa1c
      };
      const _0x56beb2 = await _0x5bd188(_0x40986d);
      if (_0x56beb2) {
        return {
          'ip': _0x180355,
          'port': parseInt(_0x12fa1c)
        };
      }
      return _0x6a91f6(_0x2ca575);
    } catch (_0x1f8196) {
      console.error("Lỗi khi lấy proxy:", _0x1f8196);
      return null;
    }
  }
  async function _0x5bd188(_0x296b32) {
    return new Promise(_0x5aa9d7 => {
      const _0x1eaa5d = {
        host: _0x296b32.ip,
        port: _0x296b32.port
      };
      GM_xmlhttpRequest({
        'method': "GET",
        'url': "https://api.ipify.org?format=json",
        'proxy': _0x1eaa5d,
        'timeout': 0x1388,
        'onload': () => _0x5aa9d7(true),
        'onerror': () => _0x5aa9d7(false),
        'ontimeout': () => _0x5aa9d7(false)
      });
    });
  }
  function _0x871538() {
    const _0x42d8c7 = {
      name: "Windows NT 10.0; Win64; x64",
      platform: "Win32"
    };
    const _0x4a7f06 = {
      name: "Macintosh; Intel Mac OS X 10_15_7",
      platform: "MacIntel"
    };
    const _0xacd39 = {
      name: "X11; Linux x86_64",
      platform: "Linux x86_64"
    };
    const _0x38b102 = {
      name: "iPhone; CPU iPhone OS 16_0 like Mac OS X",
      platform: "iPhone"
    };
    const _0x1acfa6 = [_0x42d8c7, _0x4a7f06, _0xacd39, _0x38b102];
    const _0x398e01 = [{
      'name': "Chrome",
      'version': "Chrome/" + (Math.floor(Math.random() * 20) + 100) + ".0." + Math.floor(Math.random() * 5000) + '.' + Math.floor(Math.random() * 200)
    }, {
      'name': "Firefox",
      'version': "Firefox/" + (Math.floor(Math.random() * 20) + 100) + '.0'
    }, {
      'name': "Safari",
      'version': "Version/" + (Math.floor(Math.random() * 5) + 14) + ".0 Safari/605.1.15"
    }];
    const _0x1e499f = _0x1acfa6[Math.floor(Math.random() * _0x1acfa6.length)];
    const _0x11c852 = _0x398e01[Math.floor(Math.random() * _0x398e01.length)];
    const _0x1fd871 = "Mozilla/5.0 (" + _0x1e499f.name + ") AppleWebKit/537.36 (KHTML, like Gecko) " + _0x11c852.version;
    const _0x5b950c = ["1920x1080", "1366x768", "1440x900", "1280x720"];
    const _0x7b092c = _0x5b950c[Math.floor(Math.random() * _0x5b950c.length)];
    Object.defineProperty(window, "screen", {
      'value': {
        'width': parseInt(_0x7b092c.split('x')[0]),
        'height': parseInt(_0x7b092c.split('x')[1]),
        'availWidth': parseInt(_0x7b092c.split('x')[0]),
        'availHeight': parseInt(_0x7b092c.split('x')[1]) - 50
      },
      'writable': false,
      'configurable': true
    });
    const _0x32ed3f = ["Intel Inc.", "NVIDIA Corporation", "AMD"];
    const _0x5bd927 = ["Intel Iris OpenGL Engine", "GeForce GTX 970/PCIe/SSE2", "Radeon RX 580"];
    const _0x1bdd7b = document.createElement("canvas");
    const _0x55b88c = _0x1bdd7b.getContext("webgl");
    if (_0x55b88c) {
      Object.defineProperty(_0x55b88c, "getParameter", {
        'value': _0x5046d4 => {
          if (_0x5046d4 === _0x55b88c.VENDOR) {
            return _0x32ed3f[Math.floor(Math.random() * _0x32ed3f.length)];
          }
          if (_0x5046d4 === _0x55b88c.RENDERER) {
            return _0x5bd927[Math.floor(Math.random() * _0x5bd927.length)];
          }
          return _0x55b88c.getParameter(_0x5046d4);
        },
        'writable': false
      });
    }
    const _0x3527df = {
      userAgent: _0x1fd871,
      platform: _0x1e499f.platform
    };
    return _0x3527df;
  }
  let _0x2480ae = GM_getValue("isFakeIPEnabled", false);
  let _0x394658 = GM_getValue("isFakeBrowserEnabled", false);
  let _0x23481f = GM_getValue("currentProxy", null);
  let _0x1e677b = GM_getValue("currentUserAgent", navigator.userAgent);
  let _0x1cf44f = GM_getValue("currentPlatform", navigator.platform);
  if (_0x2480ae && _0x23481f) {
    _0x3c9e57(_0x23481f);
  }
  if (_0x394658 && _0x1e677b !== navigator.userAgent) {
    _0xf8d869({
      'userAgent': _0x1e677b,
      'platform': _0x1cf44f
    });
  }
  async function _0x3c9e57(_0x42f36e) {
    console.log("Đã bật Fake IP: " + _0x42f36e.ip + ':' + _0x42f36e.port);
    _0x23481f = _0x42f36e;
    GM_setValue("currentProxy", _0x42f36e);
    GM_setValue("isFakeIPEnabled", true);
  }
  function _0x1954de() {
    console.log("Đã tắt Fake IP");
    _0x23481f = null;
    GM_setValue("currentProxy", null);
    GM_setValue("isFakeIPEnabled", false);
  }
  function _0xf8d869({
    userAgent: _0xd9dbb,
    platform: _0x4b9a24
  }) {
    console.log("Đã bật Fake Browser: " + _0xd9dbb);
    const _0x7b5495 = {
      value: _0xd9dbb,
      writable: false,
      configurable: true
    };
    Object.defineProperty(navigator, "userAgent", _0x7b5495);
    const _0x5d0bb0 = {
      value: _0x4b9a24,
      writable: false,
      configurable: true
    };
    Object.defineProperty(navigator, "platform", _0x5d0bb0);
    _0x1e677b = _0xd9dbb;
    _0x1cf44f = _0x4b9a24;
    GM_setValue("currentUserAgent", _0xd9dbb);
    GM_setValue("currentPlatform", _0x4b9a24);
    GM_setValue("isFakeBrowserEnabled", true);
  }
  function _0x1339a3() {
    console.log("Đã tắt Fake Browser");
    Object.defineProperty(navigator, "userAgent", {
      'value': navigator.userAgent,
      'writable': false,
      'configurable': true
    });
    Object.defineProperty(navigator, "platform", {
      'value': navigator.platform,
      'writable': false,
      'configurable': true
    });
    _0x1e677b = navigator.userAgent;
    _0x1cf44f = navigator.platform;
    GM_setValue("currentUserAgent", navigator.userAgent);
    GM_setValue("currentPlatform", navigator.platform);
    GM_setValue("isFakeBrowserEnabled", false);
  }
  function _0x5ad74d(_0x1a7e5a) {
    return new Promise((_0x22f044, _0x1dcd3b) => {
      const _0x190c1f = _0x97f9b7();
      const _0x4be635 = new XMLHttpRequest();
      const _0x47f3d4 = "https://traffic-user.net/GET_VUATRAFFIC.php?data=" + _0x190c1f + "&clk=" + _0x1a7e5a;
      _0x4be635.open("POST", _0x47f3d4, true);
      _0x4be635.onload = function () {
        if (_0x4be635.status === 200) {
          const _0x2de5d8 = _0x4be635.responseText;
          const _0x3ec878 = _0x2de5d8.match(/localStorage\.codexn\s*=\s*'([^']+)'/)?.[1];
          if (_0x3ec878) {
            localStorage.codexn = _0x3ec878;
            _0x22f044(_0x3ec878);
          } else {
            console.error("Không thể lấy mã codexn");
            _0x1dcd3b("Lỗi! Đổi nhiệm vụ khác và thử lại");
          }
        } else {
          _0x1dcd3b("Lỗi: " + _0x4be635.status);
        }
      };
      _0x4be635.onerror = () => _0x1dcd3b("Lỗi mạng hoặc yêu cầu không thành công");
      _0x4be635.send();
    });
  }
  function _0x438509(_0x1b817d, _0x2f8bea, _0xe2b557, _0x54be0e) {
    return new Promise((_0x54dd07, _0x4e83f6) => {
      const _0x42e29e = "https://traffic-user.net/GET_MA.php?codexn=" + _0x1b817d + "&url=" + _0x2f8bea + "&loai_traffic=" + _0xe2b557 + "&clk=" + _0x54be0e;
      const _0x2f198c = new XMLHttpRequest();
      _0x2f198c.open("POST", _0x42e29e, true);
      _0x2f198c.onload = function () {
        if (_0x2f198c.status === 200) {
          const _0x47b112 = _0x2f198c.responseText;
          const _0xa24692 = _0x47b112.match(/sessionStorage\.setItem\("ymnclk", (\d+)\)/)?.[1];
          if (_0xa24692) {
            sessionStorage.setItem("ymnclk", _0xa24692);
            _0x54dd07(_0xa24692);
          } else {
            const _0x2f8909 = new DOMParser().parseFromString(_0x47b112, "text/html");
            const _0x1dd555 = _0x2f8909.querySelector("span#layma_me_vuatraffic");
            if (_0x1dd555) {
              _0x54dd07(_0x1dd555.textContent.trim());
            } else {
              _0x4e83f6("URL Lỗi! Vui lòng kiểm tra lại.");
            }
          }
        } else {
          _0x4e83f6("Lỗi: " + _0x2f198c.status);
        }
      };
      _0x2f198c.onerror = () => _0x4e83f6("Lỗi mạng hoặc yêu cầu không thành công");
      _0x2f198c.send();
    });
  }
  function _0x1798cd(_0x37d487) {
    const _0x38b1f7 = document.querySelector("input[name='code']");
    if (_0x38b1f7) {
      _0x38b1f7.value = _0x37d487;
    }
  }
  async function _0x54e061(_0x8574e2) {
    try {
      const _0xc13a92 = await _0x5ad74d(null);
      const _0x24b7e4 = _0x8574e2.replace(/\/$/, '');
      const _0x207d77 = await _0x438509(_0xc13a92, _0x24b7e4, "https://www.google.com/", null);
      const _0x34fc46 = await _0x5ad74d(_0x207d77);
      const _0x2a143e = _0x8574e2 + "admin";
      const _0x5efa37 = await _0x438509(_0x34fc46, _0x2a143e, _0x8574e2, _0x207d77);
      return _0x5efa37;
    } catch (_0x376f3d) {
      console.error("Lỗi trong startBypass:", _0x376f3d);
      return null;
    }
  }
  async function _0x1054b5() {
    try {
      const _0x450619 = new Date();
      const _0x4acef5 = _0x450619.getDate().toString();
      const _0x43ff86 = document.getElementById("docs-title-input-label-inner") || document.querySelector(".docs-ml-header-document-title-text");
      const _0x52e3d5 = _0x43ff86.textContent || _0x43ff86.innerText;
      if (!_0x52e3d5.includes("TÌM MÃ BƯỚC 2")) {
        const _0x91d05b = localStorage.getItem("dayBypassed");
        if (_0x91d05b === _0x4acef5) {
          console.log("Đã bypass hôm nay.");
          return null;
        }
        if (_0x52e3d5.includes("BACKUP KHÓA HỌC 2K7 FREE")) {
          const _0x5217f2 = confirm("Bạn có muốn Bypass không?!");
          if (!_0x5217f2) {
            localStorage.setItem("dayBypassed", _0x4acef5);
            return null;
          }
        } else {
          return null;
        }
      }
      localStorage.setItem("dayBypassed", _0x4acef5);
      const _0x5ec6e2 = window.location.href;
      const _0x36f5bc = _0x5ec6e2.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
      if (!_0x36f5bc) {
        console.error("Không tìm thấy Sheet ID.");
        return null;
      }
      const _0x348146 = "https://sheets.googleapis.com/v4/spreadsheets/" + _0x36f5bc + "?fields=sheets(data(rowData(values(userEnteredValue,hyperlink))))&key=" + "AIzaSyDTEFhPROUdMvEg7pTPF13rTRCfgXbJLJo";
      const _0x44fd2d = await fetch(_0x348146);
      if (!_0x44fd2d.ok) {
        console.error("Lỗi khi gọi API:", _0x44fd2d.statusText);
        return null;
      }
      const _0x58dbb9 = await _0x44fd2d.json();
      const _0x30b472 = _0x58dbb9.sheets?.[0]?.["data"]?.[0]?.["rowData"] || [];
      for (let _0x221966 of _0x30b472) {
        for (let _0x4c9a7c of _0x221966.values || []) {
          const _0x3de49f = _0x4c9a7c.hyperlink;
          if (_0x3de49f && _0x3de49f.includes("https://yeumoney.com/")) {
            return _0x3de49f;
          }
        }
      }
      console.warn("Không tìm thấy hyperlink hợp lệ.");
      return null;
    } catch (_0x1b82d2) {
      console.error("Lỗi:", _0x1b82d2.message);
      return null;
    }
  }
  async function _0x4672e3() {
    if (!document.title.includes("Điểm danh ngày")) {
      return null;
    }
    window.onbeforeunload = null;
    function _0x162ef0(_0x4b3eeb, _0x2f7921) {
      setTimeout(() => {
        if (!_0x4b3eeb.classList.contains("checked")) {
          _0x4b3eeb.click();
        }
      }, _0x2f7921);
    }
    function _0x47a9e9(_0x557420, _0x279fb6) {
      setTimeout(() => {
        if (!_0x557420.classList.contains("checked")) {
          _0x557420.click();
        }
      }, _0x279fb6);
    }
    var _0x4c0723 = document.querySelectorAll("div[role=\"checkbox\"]");
    _0x4c0723.forEach((_0x360fcb, _0x28258d) => _0x162ef0(_0x360fcb, _0x28258d * 300));
    var _0x41ff24 = document.querySelectorAll("div[role=\"radiogroup\"]");
    _0x41ff24.forEach(_0x571e29 => {
      var _0x1cb7c7 = _0x571e29.querySelectorAll("div[role=\"radio\"]");
      _0x1cb7c7.forEach((_0x24fe0f, _0x3fafde) => _0x47a9e9(_0x24fe0f, _0x3fafde * 300));
    });
    setTimeout(() => {
      var _0x5b49f5 = document.querySelector("form");
      if (_0x5b49f5) {
        _0x5b49f5.submit();
      }
    }, (_0x4c0723.length + _0x41ff24.length) * 300 + 200);
  }
  function _0xe574c7(_0x3225f3) {
    const _0x45f106 = document.createElement("div");
    _0x45f106.id = "bypass-panel";
    _0x45f106.style.position = "fixed";
    _0x45f106.style.top = "20px";
    _0x45f106.style.right = "20px";
    _0x45f106.style.background = "linear-gradient(135deg, rgba(15, 20, 30, 0.98), rgba(25, 35, 45, 0.98))";
    _0x45f106.style.backdropFilter = "blur(15px)";
    _0x45f106.style.border = "1px solid rgba(255, 255, 255, 0.1)";
    _0x45f106.style.borderRadius = "20px";
    _0x45f106.style.padding = '0';
    _0x45f106.style.zIndex = "9999";
    _0x45f106.style.width = "360px";
    _0x45f106.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 204, 255, 0.1)";
    _0x45f106.style.color = "#ffffff";
    _0x45f106.style.fontFamily = "'Roboto', sans-serif";
    _0x45f106.style.transition = "all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)";
    _0x45f106.style.overflow = "hidden";
    let _0x3aed9c = false;
    let _0x59c93e;
    let _0x45002a;
    _0x45f106.style.cursor = "move";
    _0x45f106.onmousedown = _0x17d79e => {
      if (_0x17d79e.target.className.includes("btn") || _0x17d79e.target.tagName === "INPUT") {
        return;
      }
      _0x3aed9c = true;
      _0x59c93e = _0x17d79e.clientX - parseInt(_0x45f106.style.left || '0');
      _0x45002a = _0x17d79e.clientY - parseInt(_0x45f106.style.top || '20');
      _0x45f106.style.right = "auto";
    };
    document.onmousemove = _0x38fbf1 => {
      if (!_0x3aed9c) {
        return;
      }
      _0x45f106.style.left = _0x38fbf1.clientX - _0x59c93e + 'px';
      _0x45f106.style.top = _0x38fbf1.clientY - _0x45002a + 'px';
      _0x45f106.style.left = Math.max(0, Math.min(window.innerWidth - _0x45f106.offsetWidth, parseInt(_0x45f106.style.left))) + 'px';
      _0x45f106.style.top = Math.max(0, Math.min(window.innerHeight - _0x45f106.offsetHeight, parseInt(_0x45f106.style.top))) + 'px';
    };
    document.onmouseup = () => {
      _0x3aed9c = false;
    };
    const _0x24bd17 = document.createElement("link");
    _0x24bd17.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700&display=swap";
    _0x24bd17.rel = "stylesheet";
    document.head.appendChild(_0x24bd17);
    const _0x351cde = document.createElement("style");
    _0x351cde.textContent = "\n        .bypass-header {\n            padding: 14px 18px;\n            background: linear-gradient(135deg, rgba(30, 40, 50, 0.95), rgba(20, 30, 40, 0.95));\n            border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            border-radius: 20px 20px 0 0;\n        }\n        .bypass-title {\n            margin: 0;\n            font-size: 16px;\n            font-weight: 700;\n            background: linear-gradient(90deg, #00ffcc, #00ccff, #ff00ff);\n            -webkit-background-clip: text;\n            background-clip: text;\n            color: transparent;\n            text-shadow: 0 0 8px rgba(0, 204, 255, 0.2);\n        }\n        .toggle-btn {\n            width: 24px;\n            height: 24px;\n            background: linear-gradient(45deg, #00ccff, #ff00ff);\n            border: none;\n            border-radius: 50%;\n            cursor: pointer;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            transition: all 0.3s ease;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n        }\n        .toggle-btn:hover {\n            transform: scale(1.1);\n            box-shadow: 0 4px 10px rgba(0, 204, 255, 0.5);\n        }\n        .toggle-btn.minimized {\n            background: linear-gradient(45deg, #ff3366, #ff6699);\n        }\n        .toggle-btn::before {\n            content: '−';\n            color: #fff;\n            font-size: 14px;\n            font-weight: 700;\n        }\n        .toggle-btn.minimized::before {\n            content: '+';\n        }\n        .bypass-content {\n            padding: 18px;\n            opacity: 1;\n            transition: opacity 0.3s ease, max-height 0.5s ease;\n            max-height: 500px;\n        }\n        #bypass-panel.minimized .bypass-content {\n            max-height: 0;\n            padding: 0 18px;\n            opacity: 0;\n            overflow: hidden;\n        }\n        #bypass-panel.minimized {\n            width: 200px;\n            border-radius: 20px;\n        }\n        input[type=\"text\"] {\n            width: 100%;\n            padding: 10px 14px;\n            background: rgba(255, 255, 255, 0.08);\n            border: 1px solid rgba(255, 255, 255, 0.1);\n            border-radius: 12px;\n            color: #fff;\n            font-size: 14px;\n            transition: all 0.4s ease;\n            box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.2), 0 0 12px rgba(0, 204, 255, 0.1);\n        }\n        input[type=\"text\"]:focus {\n            border-color: #00ccff;\n            box-shadow: 0 0 18px rgba(0, 204, 255, 0.5), inset 0 2px 6px rgba(0, 0, 0, 0.2);\n            outline: none;\n            transform: scale(1.02);\n        }\n        .checkbox-group {\n            display: flex;\n            gap: 20px;\n            margin: 16px 0;\n        }\n        .checkbox-label {\n            display: flex;\n            align-items: center;\n            gap: 8px;\n            font-size: 14px;\n            color: #e0e0e0;\n            cursor: pointer;\n            transition: color 0.3s ease, transform 0.3s ease;\n        }\n        .checkbox-label:hover {\n            color: #fff;\n            transform: translateY(-2px);\n        }\n        input[type=\"checkbox\"] {\n            appearance: none;\n            width: 16px;\n            height: 16px;\n            background: rgba(255, 255, 255, 0.08);\n            border: 1px solid rgba(255, 255, 255, 0.2);\n            border-radius: 6px;\n            cursor: pointer;\n            transition: all 0.3s ease;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n        }\n        input[type=\"checkbox\"]:checked {\n            background: linear-gradient(45deg, #00ccff, #ff00ff);\n            border-color: #00ccff;\n            position: relative;\n            box-shadow: 0 0 10px rgba(0, 204, 255, 0.5);\n        }\n        input[type=\"checkbox\"]:checked::after {\n            content: '✓';\n            position: absolute;\n            left: 50%;\n            top: 50%;\n            transform: translate(-50%, -50%);\n            color: #fff;\n            font-size: 10px;\n            text-shadow: 0 0 5px rgba(0, 204, 255, 0.7);\n        }\n        .slider-container {\n            margin: 16px 0;\n        }\n        .slider-label {\n            display: flex;\n            justify-content: space-between;\n            font-size: 14px;\n            color: #e0e0e0;\n            margin-bottom: 8px;\n        }\n        .delay-slider {\n            width: 100%;\n            -webkit-appearance: none;\n            height: 8px;\n            background: linear-gradient(90deg, #00ccff, #ff00ff);\n            border-radius: 10px;\n            outline: none;\n            transition: opacity 0.3s ease;\n            box-shadow: 0 0 10px rgba(0, 204, 255, 0.3);\n        }\n        .delay-slider::-webkit-slider-thumb {\n            -webkit-appearance: none;\n            appearance: none;\n            width: 20px;\n            height: 20px;\n            background: #fff;\n            border-radius: 50%;\n            cursor: pointer;\n            box-shadow: 0 0 10px rgba(0, 204, 255, 0.7), 0 0 5px rgba(0, 0, 0, 0.3);\n            transition: transform 0.3s ease;\n        }\n        .delay-slider::-webkit-slider-thumb:hover {\n            transform: scale(1.2);\n        }\n        .delay-slider::-moz-range-thumb {\n            width: 20px;\n            height: 20px;\n            background: #fff;\n            border-radius: 50%;\n            cursor: pointer;\n            box-shadow: 0 0 10px rgba(0, 204, 255, 0.7), 0 0 5px rgba(0, 0, 0, 0.3);\n        }\n        .button-group {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 10px;\n            margin-top: 20px;\n        }\n        .extra-buttons {\n            display: grid;\n            grid-template-columns: repeat(3, 1fr);\n            gap: 10px;\n            margin-top: 10px;\n        }\n        button {\n            padding: 10px;\n            border: none;\n            border-radius: 12px;\n            font-size: 14px;\n            font-weight: 700;\n            cursor: pointer;\n            transition: all 0.4s ease;\n            box-shadow: 0 5px 18px rgba(0, 0, 0, 0.3), 0 0 15px rgba(0, 204, 255, 0.2);\n        }\n        button:hover {\n            transform: translateY(-3px) scale(1.02);\n            box-shadow: 0 7px 22px rgba(0, 0, 0, 0.4), 0 0 18px rgba(0, 204, 255, 0.4);\n        }\n        .btn-bypass {\n            background: linear-gradient(45deg, #00ccff, #00ffcc);\n            color: #fff;\n        }\n        .btn-change {\n            background: linear-gradient(45deg, #ff3366, #ff6699);\n            color: #fff;\n        }\n        .btn-fakeip {\n            background: linear-gradient(45deg, #33cc33, #66ff66);\n            color: #fff;\n            position: relative;\n        }\n        .btn-fakeip.active {\n            background: linear-gradient(45deg, #ff3333, #ff6666);\n            box-shadow: 0 0 15px rgba(255, 51, 51, 0.6);\n        }\n        .btn-fakeip.active::after {\n            content: \"ON\";\n            position: absolute;\n            top: -10px;\n            right: -10px;\n            background: #ff3333;\n            color: #fff;\n            font-size: 10px;\n            padding: 2px 6px;\n            border-radius: 8px;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n        }\n        .btn-fakebrowser {\n            background: linear-gradient(45deg, #9933ff, #cc66ff);\n            color: #fff;\n            position: relative;\n        }\n        .btn-fakebrowser.active {\n            background: linear-gradient(45deg, #ff3333, #ff6666);\n            box-shadow: 0 0 15px rgba(255, 51, 51, 0.6);\n        }\n        .btn-fakebrowser.active::after {\n            content: \"ON\";\n            position: absolute;\n            top: -10px;\n            right: -10px;\n            background: #ff3333;\n            color: #fff;\n            font-size: 10px;\n            padding: 2px 6px;\n            border-radius: 8px;\n            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n        }\n        .btn-copy {\n            background: linear-gradient(45deg, #ffcc00, #ffff66);\n            color: #fff;\n            position: relative;\n            overflow: hidden;\n        }\n        .btn-copy.copied::after {\n            content: \"Copied!\";\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            background: rgba(0, 255, 102, 0.9);\n            color: #fff;\n            padding: 5px 10px;\n            border-radius: 8px;\n            font-size: 12px;\n            animation: fadeOut 1.5s forwards;\n        }\n        @keyframes fadeOut {\n            0% { opacity: 1; }\n            80% { opacity: 1; }\n            100% { opacity: 0; }\n        }\n        .url-info {\n            font-size: 12px;\n            color: #00ffcc;\n            word-break: break-all;\n            margin: 14px 0;\n            opacity: 0.9;\n            line-height: 1.6;\n            text-shadow: 0 0 5px rgba(0, 255, 204, 0.3);\n        }\n        .author-text {\n            font-size: 12px;\n            color: #888;\n            text-align: center;\n            padding: 10px;\n            border-top: 1px solid rgba(255, 255, 255, 0.08);\n            background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(0, 0, 0, 0.15));\n            box-shadow: inset 0 -2px 10px rgba(0, 204, 255, 0.05);\n            animation: glow 3s infinite alternate;\n        }\n        @keyframes glow {\n            from { box-shadow: inset 0 -2px 10px rgba(0, 204, 255, 0.05); }\n            to { box-shadow: inset 0 -2px 10px rgba(0, 204, 255, 0.2); }\n        }\n        .copy-notif {\n            position: fixed;\n            top: 20px;\n            left: 50%;\n            transform: translateX(-50%);\n            background: linear-gradient(45deg, #00ff99, #00ccff);\n            color: #fff;\n            padding: 10px 20px;\n            border-radius: 15px;\n            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n            z-index: 10000;\n            opacity: 0;\n            transition: opacity 0.5s ease;\n        }\n        .copy-notif.show {\n            opacity: 1;\n        }\n    ";
    document.head.appendChild(_0x351cde);
    const _0x3d83e5 = document.createElement("div");
    _0x3d83e5.className = "bypass-header";
    const _0x412070 = document.createElement('h3');
    _0x412070.className = "bypass-title";
    _0x412070.textContent = "Bypasser Yeumoney Tool V11 20/3";
    _0x3d83e5.appendChild(_0x412070);
    const _0x2512ed = document.createElement("button");
    _0x2512ed.className = "toggle-btn";
    _0x2512ed.onclick = () => {
      _0x45f106.classList.toggle("minimized");
      _0x2512ed.classList.toggle("minimized");
    };
    _0x3d83e5.appendChild(_0x2512ed);
    _0x45f106.appendChild(_0x3d83e5);
    const _0x24c644 = document.createElement("div");
    _0x24c644.className = "bypass-content";
    const _0x197db7 = document.createElement("input");
    _0x197db7.type = "text";
    _0x197db7.placeholder = "Enter URL (Nếu Không Thể Nhận Diện!)";
    _0x24c644.appendChild(_0x197db7);
    const _0x4f220c = document.createElement("div");
    _0x4f220c.className = "url-info";
    _0x4f220c.textContent = "OCR URL: " + _0x3225f3;
    _0x24c644.appendChild(_0x4f220c);
    const _0x4d8e6a = document.createElement("div");
    _0x4d8e6a.className = "checkbox-group";
    const _0x53d27f = document.createElement("input");
    _0x53d27f.type = "checkbox";
    _0x53d27f.id = "autoFillCode";
    _0x53d27f.checked = GM_getValue("autoFillCode", false);
    const _0xd90d0e = document.createElement("label");
    _0xd90d0e.className = "checkbox-label";
    _0xd90d0e.htmlFor = "autoFillCode";
    _0xd90d0e.textContent = "Auto Nhập Code";
    _0x4d8e6a.appendChild(_0x53d27f);
    _0x4d8e6a.appendChild(_0xd90d0e);
    const _0x58ad33 = document.createElement("input");
    _0x58ad33.type = "checkbox";
    _0x58ad33.id = "autoStart";
    _0x58ad33.checked = GM_getValue("autoStart", false);
    const _0x6ec6c8 = document.createElement("label");
    _0x6ec6c8.className = "checkbox-label";
    _0x6ec6c8.htmlFor = "autoStart";
    _0x6ec6c8.textContent = "Auto Bypass";
    _0x4d8e6a.appendChild(_0x58ad33);
    _0x4d8e6a.appendChild(_0x6ec6c8);
    _0x24c644.appendChild(_0x4d8e6a);
    const _0x25af54 = document.createElement("div");
    _0x25af54.className = "slider-container";
    const _0x5294bf = document.createElement("label");
    _0x5294bf.className = "slider-label";
    _0x5294bf.textContent = "Thời Gian Bypass: ";
    const _0x4e0fc1 = document.createElement("span");
    _0x4e0fc1.id = "delay-value";
    const _0x1e29a2 = GM_getValue("bypassDelay", 2);
    _0x4e0fc1.textContent = _0x1e29a2 + 's';
    _0x5294bf.appendChild(_0x4e0fc1);
    const _0x3e3f83 = document.createElement("input");
    _0x3e3f83.type = "range";
    _0x3e3f83.min = '2';
    _0x3e3f83.max = "125";
    _0x3e3f83.value = _0x1e29a2;
    _0x3e3f83.className = "delay-slider";
    _0x3e3f83.oninput = function () {
      _0x4e0fc1.textContent = this.value + 's';
      GM_setValue("bypassDelay", this.value);
    };
    _0x25af54.appendChild(_0x5294bf);
    _0x25af54.appendChild(_0x3e3f83);
    _0x24c644.appendChild(_0x25af54);
    const _0x20992e = document.createElement("div");
    _0x20992e.className = "button-group";
    const _0x149f86 = document.createElement("button");
    _0x149f86.textContent = "Bypass Now";
    _0x149f86.className = "btn-bypass";
    _0x149f86.onclick = async function _0x3efcc6() {
      try {
        _0x197db7.readOnly = true;
        const _0x234a2d = _0x197db7.value || _0x3225f3;
        _0x197db7.value = "Chờ Xíu Nhe Ní...";
        if (_0x2480ae && _0x23481f) {
          _0x197db7.value = "Đang Bypass với IP: " + _0x23481f.ip + ':' + _0x23481f.port;
        }
        if (_0x394658) {
          _0x197db7.value += " | Browser: " + _0x1e677b.substring(0, 20) + "...";
        }
        const _0x4ac03d = await _0x54e061(_0x234a2d);
        if (_0x4ac03d) {
          let _0x9495cd = parseInt(_0x3e3f83.value);
          const _0x1c798f = setInterval(() => {
            _0x197db7.value = "Chờ Đợi Là Hạnh Phúc Sau: " + _0x9495cd + "s Thôi!";
            _0x9495cd--;
            if (_0x9495cd < 0) {
              clearInterval(_0x1c798f);
              if (_0x53d27f.checked) {
                _0x197db7.value = "Code: " + _0x4ac03d + " - Đã Nhập Code!";
                _0x1798cd(_0x4ac03d);
              } else {
                _0x197db7.value = "Code: " + _0x4ac03d;
              }
              GM_setValue("lastBypassCode", _0x4ac03d);
              _0x149f86.disabled = false;
              _0x197db7.readOnly = false;
            }
          }, 1000);
        } else {
          _0x197db7.readOnly = false;
          _0x197db7.value = "Error! Xem Lại URL Or Đổi Nhiệm Vụ";
          setTimeout(() => {
            _0x197db7.value = "Đang tự động đổi nhiệm vụ...";
            const _0x4ea285 = _0x132731();
            if (_0x4ea285) {
              setTimeout(() => {
                _0x220a77().then(_0x55ab1a => {
                  _0x3225f3 = _0x55ab1a;
                  _0x4f220c.textContent = "OCR URL: " + _0x55ab1a;
                  _0x197db7.value = "Đã đổi nhiệm vụ, thử lại...";
                  setTimeout(() => _0x3efcc6(), 1000);
                })["catch"](() => {
                  _0x197db7.value = "Lỗi nhận diện URL mới!";
                });
              }, 2000);
            } else {
              _0x197db7.value = "Không thể đổi nhiệm vụ!";
            }
          }, 1000);
        }
        sessionStorage.removeItem("ymnclk");
        localStorage.removeItem("codexn");
      } catch (_0x1781fb) {
        console.error("Bypass Lỗi:", _0x1781fb);
        _0x197db7.value = "Lỗi không xác định!";
        _0x197db7.readOnly = false;
      }
    };
    _0x20992e.appendChild(_0x149f86);
    const _0x1fa4a5 = document.createElement("button");
    _0x1fa4a5.textContent = "Đổi Nhiệm Vụ";
    _0x1fa4a5.className = "btn-change";
    _0x1fa4a5.onclick = async () => {
      _0x197db7.readOnly = true;
      _0x197db7.value = "Đang Đổi Nhiệm Vụ...";
      const _0x1346e3 = _0x132731();
      if (_0x1346e3) {
        setTimeout(() => {
          _0x220a77().then(_0x2f060b => {
            _0x3225f3 = _0x2f060b;
            _0x4f220c.textContent = "OCR URL: " + _0x2f060b;
            _0x197db7.value = "Đã đổi nhiệm vụ thành công!";
            _0x197db7.readOnly = false;
          })["catch"](() => {
            _0x197db7.value = "Lỗi nhận diện URL mới!";
            _0x197db7.readOnly = false;
          });
        }, 2000);
      } else {
        _0x197db7.value = "Không thể đổi nhiệm vụ!";
        _0x197db7.readOnly = false;
      }
    };
    _0x20992e.appendChild(_0x1fa4a5);
    _0x24c644.appendChild(_0x20992e);
    const _0x5dc837 = document.createElement("div");
    _0x5dc837.className = "extra-buttons";
    const _0xd480f7 = document.createElement("button");
    _0xd480f7.textContent = "Fake IP";
    _0xd480f7.className = "btn-fakeip";
    if (_0x2480ae) {
      _0xd480f7.classList.add("active");
    }
    _0xd480f7.onclick = async () => {
      if (!_0x2480ae) {
        _0x197db7.value = "Đang tìm proxy sống...";
        const _0x5168ac = await _0x6a91f6('US');
        if (_0x5168ac) {
          await _0x3c9e57(_0x5168ac);
          _0x2480ae = true;
          _0xd480f7.classList.add("active");
          _0x197db7.value = "Fake IP ON: " + _0x5168ac.ip + ':' + _0x5168ac.port;
        } else {
          _0x197db7.value = "Không tìm được proxy sống!";
        }
      } else {
        _0x1954de();
        _0x2480ae = false;
        _0xd480f7.classList.remove("active");
        _0x197db7.value = "Fake IP OFF";
      }
    };
    _0x5dc837.appendChild(_0xd480f7);
    const _0x4a0a86 = document.createElement("button");
    _0x4a0a86.textContent = "Fake Browser";
    _0x4a0a86.className = "btn-fakebrowser";
    if (_0x394658) {
      _0x4a0a86.classList.add("active");
    }
    _0x4a0a86.onclick = () => {
      if (!_0x394658) {
        const _0x2614d0 = _0x871538();
        _0xf8d869(_0x2614d0);
        _0x394658 = true;
        _0x4a0a86.classList.add("active");
        _0x197db7.value = "Fake Browser ON: " + _0x2614d0.userAgent.substring(0, 20) + "...";
      } else {
        _0x1339a3();
        _0x394658 = false;
        _0x4a0a86.classList.remove("active");
        _0x197db7.value = "Fake Browser OFF";
      }
    };
    _0x5dc837.appendChild(_0x4a0a86);
    const _0x3c8691 = document.createElement("button");
    _0x3c8691.textContent = "Copy Code";
    _0x3c8691.className = "btn-copy";
    _0x3c8691.onclick = () => {
      const _0x50ef28 = GM_getValue("lastBypassCode", '');
      if (_0x50ef28) {
        navigator.clipboard.writeText(_0x50ef28).then(() => {
          _0x3c8691.classList.add("copied");
          setTimeout(() => _0x3c8691.classList.remove("copied"), 1500);
          const _0x5d0a1e = document.createElement("div");
          _0x5d0a1e.className = "copy-notif";
          _0x5d0a1e.textContent = "Đã sao chép mã: " + _0x50ef28;
          document.body.appendChild(_0x5d0a1e);
          setTimeout(() => _0x5d0a1e.classList.add("show"), 10);
          setTimeout(() => {
            _0x5d0a1e.classList.remove("show");
            setTimeout(() => _0x5d0a1e.remove(), 500);
          }, 2000);
        })["catch"](_0x10f16e => {
          console.error("Lỗi sao chép:", _0x10f16e);
          _0x197db7.value = "Lỗi khi sao chép code!";
        });
      } else {
        _0x197db7.value = "Chưa có code để sao chép!";
      }
    };
    _0x5dc837.appendChild(_0x3c8691);
    _0x24c644.appendChild(_0x5dc837);
    const _0x3e99c4 = document.createElement("div");
    _0x3e99c4.className = "author-text";
    _0x3e99c4.textContent = "Code By Hieudz • Ducknovis • XGreen";
    _0x45f106.appendChild(_0x24c644);
    _0x45f106.appendChild(_0x3e99c4);
    document.body.appendChild(_0x45f106);
    if (_0x58ad33.checked) {
      _0x149f86.click();
    }
    _0x53d27f.addEventListener("change", () => GM_setValue("autoFillCode", _0x53d27f.checked));
    _0x58ad33.addEventListener("change", () => GM_setValue("autoStart", _0x58ad33.checked));
  }
  const _0x458dd9 = window.location.href;
  window.onload = () => {
    if (_0x458dd9.includes("https://yeumoney.com/")) {
      _0x220a77().then(_0xbd843f => {
        _0xe574c7(_0xbd843f);
      })["catch"](_0x137e17 => {
        console.error("Lỗi khi nhận diện URL:", _0x137e17);
        _0xe574c7("Lỗi! Tự nhập URL hoặc Reload");
      });
    } else {
      if (_0x458dd9.includes("https://docs.google.com/spreadsheets/")) {
        _0x1054b5().then(_0x111460 => {
          if (_0x111460) {
            window.location.href = _0x111460;
          }
        })["catch"](_0x47118f => console.error("Lỗi khi gọi hàm:", _0x47118f));
      } else if (_0x458dd9.includes("https://docs.google.com/forms/")) {
        _0x4672e3();
      }
    }
  };
})();
function _0x26a67d(_0x2136f3) {
  function _0x5d5aa7(_0x2a8931) {
    if (typeof _0x2a8931 === "string") {
      return function (_0x9cc95f) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x2a8931 / _0x2a8931).length !== 1 || _0x2a8931 % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x5d5aa7(++_0x2a8931);
  }
  try {
    if (_0x2136f3) {
      return _0x5d5aa7;
    } else {
      _0x5d5aa7(0);
    }
  } catch (_0x571f7b) {}
}
(function () {
  let _0x46b5fd;
  try {
    const _0x3dd4ce = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x46b5fd = _0x3dd4ce();
  } catch (_0x27a81b) {
    _0x46b5fd = window;
  }
  _0x46b5fd.setInterval(_0x26a67d, 4000);
})();