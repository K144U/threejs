varying vec2 vUv;


void main()
{
    //pattern
    //float strength = vUv.x;

    
    // pat1
    //gl_FragColor = vec4(vUv.x,vUv.y, 1.0, 1.0);
    
    // pat2
    //gl_FragColor = vec4(vUv.x,vUv.y, 0.0, 1.0);
    
    // pat3
    //gl_FragColor = vec4(vUv.x, vUv.x , vUv.x, 1.0);
    
    //pat4
    //gl_FragColor = vec4(vUv.y, vUv.y , vUv.y, 1.0);

    //pat5
    //gl_FragColor = vec4(1.0-vUv.y, 1.0-vUv.y ,1.0- vUv.y, 1.0);

    //pat6
    //float strength = vUv.y *10.0;
    //gl_FragColor = vec4(strength,strength,strength,1.0);

    //pat7
    //float strength = mod (vUv.y *10.0, 1.0);
    //gl_FragColor = vec4(strength,strength,strength,1.0);

    //PAT8
    //float strength = mod (vUv.y * 10.0, 1.0);
    //strength = step(0.5, strength);
    ////strength = strength <0.5 ? 0.0 : 1.0 ;
    //gl_FragColor = vec4(strength,strength,strength,1.0);

    //pat9
    //float strength = mod (vUv.y * 10.0, 1.0);
    //strength = step(0.8, strength);
    ////strength = strength <0.5 ? 0.0 : 1.0 ;
    //gl_FragColor = vec4(strength,strength,strength,1.0);



    //pat10
    //float strength = mod (vUv.x * 10.0, 1.0);
    //strength = step(0.8, strength);
    ////strength = strength <0.5 ? 0.0 : 1.0 ;
    //gl_FragColor = vec4(strength,strength,strength,1.0);


    //pat11
    //float strength = step(0.8, mod (vUv.x* 10.0, 1.0));
    //strength += step(0.8, mod (vUv.y * 10.0, 1.0));
    ////strength = strength <0.5 ? 0.0 : 1.0 ;
    //gl_FragColor = vec4(strength,strength,strength,1.0);

    //pat12
    //float strength = step(0.8, mod (vUv.x* 10.0, 1.0));
    //strength *= step(0.8, mod (vUv.y * 10.0, 1.0));
    //gl_FragColor = vec4(strength,strength,strength,1.0);

    

    //pat13
    //float strength = step(0.4, mod (vUv.x* 10.0, 1.0));
    //strength *= step(0.8, mod (vUv.y * 10.0, 1.0));
    //gl_FragColor = vec4(strength,strength,strength,1.0);

    //pat14
    //float barX = step(0.4, mod (vUv.x* 10.0, 1.0));
     //barX *= step(0.8, mod (vUv.y * 10.0, 1.0));

    //float barY = step(0.8, mod (vUv.x* 10.0, 1.0));
    //barY *= step(0.4, mod (vUv.y * 10.0, 1.0));

    //float strength = barX + barY;

    //gl_FragColor = vec4(strength,strength,strength,1.0);


    //pat16
    //float barX = step(0.8, mod (vUv.x* 10.0 + 0.4, 1.0));
    //barX *= step(0.4, mod (vUv.y * 10.0 , 1.0));
    //float barY = step(0.4, mod (vUv.x* 10.0 + 0.2 , 1.0));
    //barY *= step(0.8, mod (vUv.y * 10.0 + 0.2 , 1.0));
    //float strength = barX + barY;
    //gl_FragColor = vec4(strength,strength,strength,1.0);



    //pat17
    float barX = step(0.8, mod (vUv.x* 10.0 + 0.4, 1.0));
    barX *= step(0.4, mod (vUv.y * 10.0 , 1.0));
    float barY = step(0.4, mod (vUv.x* 10.0 + 0.2 , 1.0));
    barY *= step(0.8, mod (vUv.y * 10.0 + 0.2 , 1.0));
    float strength = barX + barY;
    gl_FragColor = vec4(strength,strength,strength,1.0);

}