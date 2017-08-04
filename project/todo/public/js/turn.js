var app = new Vue({
    el:'.app',
    data:{
        turnTableObj:{
            amber:true,
            heihei:false
        },
        styleObj:{
            transition:'transform 1s linear',
            transform:null
        },
        count:0,
        isAniment:false,
        hasRes:false,
        transTime:1000,
        speed:1100
    },
    methods:{
        animentStart:function(index){
            if(this.isAniment)
                return false;
            this.isAniment = true;
            this.hasRes = false;
            this.styleObj.transition = 'transform 1s linear';
            this.count+=this.speed;
            this.styleObj.transform = 'rotate('+this.count+'deg)';
            // todo ajax post
            var _this = this;
            setTimeout(function(){
                _this.animentEnd();
            },this.transTime)
        },
        animentEnd:function(){
            if(!this.isAniment)
                return false;
            if(this.hasRes === false){
                this.count+=this.speed;
                this.styleObj.transform = 'rotate('+this.count+'deg)';
                var _this = this;
                setTimeout(function(){
                    _this.animentEnd();
                },this.transTime);
            }else{
                this.count = this.count - this.count%360 + 360 - this.hasRes * 45 + Math.floor(this.speed/360)*360;
                this.styleObj.transition = 'transform 1700ms cubic-bezier(0.21, 0.38, 0.56, 0.93)';
                this.styleObj.transform = 'rotate('+this.count+'deg)';
                _this = this;
                setTimeout(function(){
                    _this.hasRes = false;
                    _this.isAniment = false;
                    alert('结束了')
                },2000)
            }
        }
    }
});