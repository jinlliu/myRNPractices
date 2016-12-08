package com.myrnpractices.components.WebView;

import android.support.annotation.Nullable;
import android.util.Log;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by jinlliu on 12/7/2016.
 */

public class ReactRTCWebViewManager extends SimpleViewManager<RTCWebView> {
    public static final String REACT_CLASS = "MyRTCWebView";
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected RTCWebView createViewInstance(ThemedReactContext reactContext) {
        RTCWebView webView= new RTCWebView(reactContext);
        webView.setWebViewClient(new WebViewClient(){
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                view.loadUrl(url);
                return true;
            }
        });
        return webView;
    }

    @ReactProp(name = "url")
    public void setUrl(WebView view,@Nullable String url) {
        Log.e("TAG", "setUrl");
        view.loadUrl(url);
    }
    @ReactProp(name = "html")
    public void setHtml(WebView view,@Nullable String html) {
        Log.e("TAG", "setHtml");
        view.loadData(html, "text/html; charset=utf-8", "UTF-8");
    }
}
