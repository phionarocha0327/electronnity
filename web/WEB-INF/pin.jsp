<%-- 
    Document   : pin
    Created on : Jun 19, 2024, 2:17:35 PM
    Author     : Aaron
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>electronnity | pin</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/cs-theme.7.4.15.css" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/cs-inline-login.css">
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery.min.3.7.1.js"></script>
    <link rel="shortcut icon" href="${pageContext.request.contextPath}/images/logo (transparent).png" sizes="32x32" type="image/png" />
    <link rel="shortcut icon" href="${pageContext.request.contextPath}/images/logo (transparent).png" sizes="16x16" type="image/png" />
    <style>
        @font-face {
            font-family: "inter-variable";
            font-weight: 100 900;
            font-display: swap;
            src: url(fonts/Inter.var.woff2)format("woff2-variations");
        }

        @font-face {
            font-display: swap;
            font-family: "sticky-sans";
            font-style: normal;
            font-weight: 400;
            src: url(fonts/StickySans-Regular.woff2)format("woff2");
        }

        @font-face {
            font-display: swap;
            font-family: "sticky-sans";
            font-style: normal;
            font-weight: 600;
            src: url(fonts/StickySans-SemiBold.woff2)format("woff2");
        }

        @font-face {
            font-display: swap;
            font-family: "sticky-sans";
            font-style: normal;
            font-weight: 700;
            src: url(fonts/StickySans-Bold.woff2)format("woff2");
        }

        @font-face {
            font-display: swap;
            font-family: "stickysans-icons";
            font-style: normal;
            font-weight: 400;
            src: url(fonts/StickySansIcons-Regular.woff2)format("woff2");
        }

        @font-face {
            font-display: swap;
            font-family: "stickysans-icons";
            font-style: normal;
            font-weight: 700;
            src: url(fonts/StickySansIcons-Bold.woff2)format("woff2");
        }
    </style>
</head>
<body class="page-template page-template-template-blank-4 page-template-template-blank-4-php page page-id-183 theme-pro woocommerce-account woocommerce-page woocommerce-no-js x-blank x-child-theme-active x-full-width-layout-active pro-v6_4_15">
    <div class="x-root">
        <div class="x-site">
            <header class="x-masthead" role="banner"></header>
            <main class="x-layout x-layout-single" role="main">
                <div class="x-section e22311-e224 mh7r-0 mh7r-2">
                    <div class="x-bg" aria-hidden="true">
                        <div class="x-bg-layer-lower-custom">
                            <img class="s-background-image" src="images/logo banner 2.0.png" sizes="(max-width: 2887px) 100vw, (max-width: 1923px) 1924px, (max-width: 1623px) 1624px, (max-width: 1271px) 1272px, (max-width: 965px) 966px, 767px" alt />
                        </div>
                    </div>
                    <div class="x-div e22311-e225 mh7r-7 mh7r-8 mh7r-a mh7r-b mh7r-c mh7r-g mh7r-i mh7r-j mh7r-k mh7r-l mh7r-u mh7r-1j mh7r-3">
                        <div class="x-wc-shop-notices e22311-e226 mh7r-3b">
                            <div class="woocommerce-notices-wrapper"></div>
                        </div></svg></a>
                        <div class="x-text x-text-headline e22311-e229-v0 mh7r-1o mh7r-1p mh7r-1q mh7r-1r mh7r-1s mh7r-1t mh7r-1u mh7r-1v mh7r-1w mh7r-3 mh7r-4 mh7r-5">
                            <div class="x-text-content">
                                <div class="x-text-content-text">
                                    <h1 class="x-text-content-text-primary">Verify Pin</h1>
                                </div>
                            </div>
                        </div>
                        <form method ="POST" action = "${pageContext.request.contextPath}/verifyPin" class="x-div e22311-e230 mh7r-7 mh7r-8 mh7r-c mh7r-d mh7r-l mh7r-o mh7r-p mh7r-q mh7r-1l">
                            <div class="x-div e22311-e231 mh7r-7 mh7r-8 mh7r-d mh7r-g mh7r-i mh7r-k mh7r-q mh7r-r mh7r-w">
                                <div class="x-div e22311-e232 mh7r-7 mh7r-8 mh7r-d mh7r-l mh7r-q mh7r-r mh7r-1f sa-input-wrapper">
                                    <input type="text" name="pin" id="pin" placeholder=" " />
                                    <label for="pin">Enter Pin</label>
                                </div>
                            </div>
                            <div class="x-div e22311-e243 mh7r-7 mh7r-8 mh7r-c mh7r-d mh7r-g mh7r-k mh7r-o mh7r-p mh7r-q mh7r-w mh7r-z mh7r-10">
                                <input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" value="feb91129bc" /><input type="hidden" name="_wp_http_referer" value=""/>
                                <button type="submit" class="log-in-button busy-on" name="submit" value="submit">
                                    <span class="sc-primary">Submit</span>
                                    <span class="sc-busy">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.9042 8.61199C13.7024 9.77403 13.1883 10.8593 12.4168 11.7514C11.6454 12.6436 10.6458 13.3091 9.52506 13.6765C8.40433 14.0439 7.20474 14.0995 6.05484 13.8373C4.90493 13.5751 3.84804 13.0049 2.99741 12.1879C2.14679 11.3709 1.53448 10.3379 1.22611 9.1995C0.917735 8.0611 0.924914 6.86025 1.24688 5.72561C1.56884 4.59098 2.19345 3.56534 3.05378 2.75857C3.91412 1.9518 4.97775 1.39432 6.13071 1.14586" stroke="var(--white)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/cs-22311.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/cs-21811.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/cs-15280.js"></script>
</body>
</html>