package com.myrnpractices.components.WebView;

import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

/**
 * Created by jinlliu on 12/7/2016.
 */

public class ReactRTCWebViewManager extends SimpleViewManager<WebView> {
    public static final String REACT_CLASS = "MyRTCWebView";
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected WebView createViewInstance(ThemedReactContext reactContext) {
        WebView webView= new RTCWebView(reactContext);
        webView.setWebViewClient(new WebViewClient(){
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                view.loadUrl(url);
                return true;
            }
        });
        return webView;
    }
}
