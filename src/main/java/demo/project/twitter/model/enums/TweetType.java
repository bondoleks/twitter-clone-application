package demo.project.twitter.model.enums;

public enum TweetType {

    TWEET(0),
    QUOTE_TWEET(1),
    REPLY(2);

    private Integer type;
//##
    TweetType(Integer type){
        this.type = type;
    }

    public Integer getType(){
        return type;
    }
}
