#define PIN_RELAY1 16
#define PIN_RELAY2 15

void setup(){
  pinMode(PIN_RELAY1, OUTPUT);
  pinMode(PIN_RELAY2, OUTPUT);

  digitalWrite(PIN_RELAY1, 0);
  digitalWrite(PIN_RELAY2, 0);
}

void loop(){
  digitalWrite(PIN_RELAY1, 1);
  digitalWrite(PIN_RELAY2, 1);
  delay(1500);
  digitalWrite(PIN_RELAY1, 0);
  digitalWrite(PIN_RELAY2, 0);
  delay(1500);
}