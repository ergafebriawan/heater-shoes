#include <DHTesp.h>

#define PIN_DHT1 4
#define PIN_DHT2 5

#define DHTTYPE DHT22

DHT dht1(PIN_DHT1, DHTTYPE);
DHT dht2(PIN_DHT2, DHTTYPE);

void setup(){
  Serial.begin(9600);
  Serial.println(F("DHTxx test!"));

  dht1.begin();
  dht2.begin();
}

void loop() {
  delay(2000);

  float h1 = dht1.readHumidity();
  float h2 = dht2.readHumidity();

  Serial.print(F("Humidity 1: "));
  Serial.print(h1);
  Serial.println(F("%"));
  Serial.print(F("Humidity 2: "));
  Serial.print(h2);
  Serial.println(F("%"));
  Serial.println();
  
}